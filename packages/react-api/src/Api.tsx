// Copyright 2017-2021 @polkadot/react-api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { InjectedExtension } from '@polkadot/extension-inject/types';
import type { ChainProperties, ChainType } from '@polkadot/types/interfaces';
import type { KeyringStore } from '@polkadot/ui-keyring/types';
import type { ApiProps, ApiState } from './types';

import React, { useContext, useEffect, useMemo, useState } from 'react';
import store from 'store';

import { ApiPromise } from '@polkadot/api/promise';
import { deriveMapCache, setDeriveCache } from '@polkadot/api-derive/util';
import { ethereumChains, POLKADOT_GENESIS, typesBundle, typesChain, typesSpec } from '@polkadot/apps-config';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { TokenUnit } from '@polkadot/react-components/InputNumber';
import { StatusContext } from '@polkadot/react-components/Status';
import ApiSigner from '@polkadot/react-signer/signers/ApiSigner';
import { WsProvider } from '@polkadot/rpc-provider';
import { keyring } from '@polkadot/ui-keyring';
import { settings } from '@polkadot/ui-settings';
import { formatBalance, isTestChain } from '@polkadot/util';
import { setSS58Format } from '@polkadot/util-crypto';
import { defaults as addressDefaults } from '@polkadot/util-crypto/address/defaults';

import ApiContext from './ApiContext';
import registry from './typeRegistry';
import { decodeUrlTypes } from './urlTypes';


interface Props {
  children: React.ReactNode;
  url?: string;
  store?: KeyringStore;
}

interface InjectedAccountExt {
  address: string;
  meta: {
    name: string;
    source: string;
    whenCreated: number;
  };
}

interface ChainData {
  injectedAccounts: InjectedAccountExt[];
  properties: ChainProperties;
  systemChain: string;
  systemChainType: ChainType;
  systemName: string;
  systemVersion: string;
}

export const DEFAULT_DECIMALS = registry.createType('u32', 15);
export const DEFAULT_SS58 = registry.createType('u32', addressDefaults.prefix);

let api: ApiPromise;

export { api };

function isKeyringLoaded() {
  try {
    return !!keyring.keyring;
  } catch {
    return false;
  }
}

function getDevTypes(): Record<string, Record<string, string>> {
  const types = decodeUrlTypes() || store.get('types', {}) as Record<string, Record<string, string>>;
  const names = Object.keys(types);

  names.length && console.log('Injected types:', names.join(', '));

  return types;
}

async function getInjectedAccounts(injectedPromise: Promise<InjectedExtension[]>): Promise<InjectedAccountExt[]> {
  try {
    await injectedPromise;

    const accounts = await web3Accounts();

    return accounts.map(({ address, meta }, whenCreated): InjectedAccountExt => ({
      address,
      meta: {
        ...meta,
        name: `${meta.name || 'unknown'} (${meta.source === 'polkadot-js' ? 'extension' : meta.source})`,
        whenCreated
      }
    }));
  } catch (error) {
    console.error('web3Enable', error);

    return [];
  }
}

async function retrieve(api: ApiPromise, injectedPromise: Promise<InjectedExtension[]>): Promise<ChainData> {
  const [chainProperties, systemChain, systemChainType, systemName, systemVersion, injectedAccounts] = await Promise.all([
    api.rpc.system.properties(),
    api.rpc.system.chain(),
    api.rpc.system.chainType
      ? api.rpc.system.chainType()
      : Promise.resolve(registry.createType('ChainType', 'Live')),
    api.rpc.system.name(),
    api.rpc.system.version(),
    getInjectedAccounts(injectedPromise)
  ]);

  // HACK Horrible hack to try and give some window to the DOT denomination
  const ss58Format = api.consts.system?.ss58Prefix || chainProperties.ss58Format;
  const properties = registry.createType('ChainProperties',
    api.genesisHash.eq(POLKADOT_GENESIS)
      ? { ...chainProperties, ss58Format, tokenDecimals: 10, tokenSymbol: 'DOT' }
      : { ...chainProperties, ss58Format }
  );

  return {
    injectedAccounts,
    properties,
    systemChain: (systemChain || '<unknown>').toString(),
    systemChainType,
    systemName: systemName.toString(),
    systemVersion: systemVersion.toString()
  };
}

async function loadOnReady(api: ApiPromise, injectedPromise: Promise<InjectedExtension[]>, store: KeyringStore | undefined, types: Record<string, Record<string, string>>): Promise<ApiState> {
  registry.register(types);
  const { injectedAccounts, properties, systemChain, systemChainType, systemName, systemVersion } = await retrieve(api, injectedPromise);
  const ss58Format = settings.prefix === -1
    ? properties.ss58Format.unwrapOr(DEFAULT_SS58).toNumber()
    : settings.prefix;
  const tokenSymbol = properties.tokenSymbol.unwrapOr(undefined)?.toString();
  const tokenDecimals = properties.tokenDecimals.unwrapOr(DEFAULT_DECIMALS).toNumber();
  const isEthereum = ethereumChains.includes(api.runtimeVersion.specName.toString());
  const isDevelopment = !isEthereum && (systemChainType.isDevelopment || systemChainType.isLocal || isTestChain(systemChain));

  console.log(`chain: ${systemChain} (${systemChainType.toString()}), ${JSON.stringify(properties)}`);

  // explicitly override the ss58Format as specified
  registry.setChainProperties(registry.createType('ChainProperties', { ss58Format, tokenDecimals, tokenSymbol }));

  // FIXME This should be removed (however we have some hanging bits, e.g. vanity)
  setSS58Format(ss58Format);

  // first setup the UI helpers
  formatBalance.setDefaults({
    decimals: tokenDecimals,
    unit: tokenSymbol
  });
  TokenUnit.setAbbr(tokenSymbol);

  // finally load the keyring
  isKeyringLoaded() || keyring.loadAll({
    genesisHash: api.genesisHash,
    isDevelopment,
    ss58Format,
    store,
    type: isEthereum ? 'ethereum' : 'ed25519'
  }, injectedAccounts);

  const defaultSection = Object.keys(api.tx)[0];
  const defaultMethod = Object.keys(api.tx[defaultSection])[0];
  const apiDefaultTx = api.tx[defaultSection][defaultMethod];
  const apiDefaultTxSudo = (api.tx.system && api.tx.system.setCode) || apiDefaultTx;

  setDeriveCache(api.genesisHash.toHex(), deriveMapCache);

  return {
    apiDefaultTx,
    apiDefaultTxSudo,
    hasInjectedAccounts: injectedAccounts.length !== 0,
    isApiReady: true,
    isDevelopment: isEthereum ? false : isDevelopment,
    isEthereum,
    systemChain,
    systemName,
    systemVersion
  };
}

function Api({ children, store, url }: Props): React.ReactElement<Props> | null {
  const { queuePayload, queueSetTxStatus } = useContext(StatusContext);
  const [state, setState] = useState<ApiState>({ hasInjectedAccounts: false, isApiReady: false } as unknown as ApiState);
  const [isApiConnected, setIsApiConnected] = useState(false);
  const [isApiInitialized, setIsApiInitialized] = useState(false);
  const [apiError, setApiError] = useState<null | string>(null);
  const [extensions, setExtensions] = useState<InjectedExtension[] | undefined>();

  const value = useMemo<ApiProps>(
    () => ({ ...state, api, apiError, extensions, isApiConnected, isApiInitialized, isWaitingInjected: !extensions }),
    [apiError, extensions, isApiConnected, isApiInitialized, state]
  );

  // initial initialization
  useEffect((): void => {
    const provider = new WsProvider(url);
    const signer = new ApiSigner(registry, queuePayload, queueSetTxStatus);
    const types = getDevTypes();
    const customJson = {
      "GeodeOf": {
        "owner": "AccountId",
        "user": "Option<AccountId>",
        "provider": "Option<AccountId>",
        "ip": "Vec<u8>",
        "dns": "Vec<u8>",
        "props": "Option<GeodeProperties>",
        "binary": "Option<Hash>",
        "attestors": "Vec<AccountId>",
        "state": "GeodeState"
      },
      "GeodeProperties": "Vec<GeodeProperty>",
      "GeodeProperty": {
        "name": "Vec<u8>",
        "value": "Vec<u8>"
      },
      "GeodeState": {
        "_enum": [
          "Registered",
          "Attested",
          "InOrder",
          "InWork"
        ]
      },
      "OrderPair": {
        "first": "Vec<u8>",
        "second": "Vec<u8>"
      },
      "OrderType": {
        "_enum": [
          "Buy",
          "Sell"
        ]
      },
      "DealId": "AccountId",
      "OrderId": "AccountId"
    };

    api = new ApiPromise({ provider, registry, signer, types, typesBundle, typesChain, typesSpec });
    api.registerTypes(customJson);

    api.on('connected', () => setIsApiConnected(true));
    api.on('disconnected', () => setIsApiConnected(false));
    api.on('error', (error: Error) => setApiError(error.message));
    api.on('ready', (): void => {
      const injectedPromise = web3Enable('polkadot-js/apps');

      injectedPromise
        .then(setExtensions)
        .catch(console.error);

      loadOnReady(api, injectedPromise, store, types)
        .then(setState)
        .catch((error): void => {
          console.error(error);

          setApiError((error as Error).message);
        });
    });

    setIsApiInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!value.isApiInitialized) {
    return null;
  }

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}

export default React.memo(Api);
