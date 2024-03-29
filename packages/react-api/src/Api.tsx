// Copyright 2017-2021 @polkadot/react-api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';
import type { InjectedExtension } from '@polkadot/extension-inject/types';
import type { ChainProperties, ChainType } from '@polkadot/types/interfaces';
import type { KeyringStore } from '@polkadot/ui-keyring/types';
import type { ApiProps, ApiState } from './types';

import React, { useContext, useEffect, useMemo, useState } from 'react';
import store from 'store';

import { ApiPromise } from '@polkadot/api/promise';
import { deriveMapCache, setDeriveCache } from '@polkadot/api-derive/util';
import { ethereumChains, typesBundle, typesChain, typesSpec } from '@polkadot/apps-config';
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

export const DEFAULT_DECIMALS = registry.createType('u32', 12);
export const DEFAULT_SS58 = registry.createType('u32', addressDefaults.prefix);
export const DEFAULT_AUX = ['Aux1', 'Aux2', 'Aux3', 'Aux4', 'Aux5', 'Aux6', 'Aux7', 'Aux8', 'Aux9'];

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
  const properties = registry.createType('ChainProperties', { ss58Format, tokenDecimals: chainProperties.tokenDecimals, tokenSymbol: chainProperties.tokenSymbol });

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
  const tokenSymbol = properties.tokenSymbol.unwrapOr([formatBalance.getDefaults().unit, ...DEFAULT_AUX]);
  const tokenDecimals = properties.tokenDecimals.unwrapOr([DEFAULT_DECIMALS]);
  const isEthereum = ethereumChains.includes(api.runtimeVersion.specName.toString());
  const isDevelopment = !isEthereum && (systemChainType.isDevelopment || systemChainType.isLocal || isTestChain(systemChain));

  console.log(`chain: ${systemChain} (${systemChainType.toString()}), ${JSON.stringify(properties)}`);

  // explicitly override the ss58Format as specified
  registry.setChainProperties(registry.createType('ChainProperties', { ss58Format, tokenDecimals, tokenSymbol }));

  // FIXME This should be removed (however we have some hanging bits, e.g. vanity)
  setSS58Format(ss58Format);

  // first setup the UI helpers
  formatBalance.setDefaults({
    decimals: (tokenDecimals as BN[]).map((b) => b.toNumber()),
    unit: tokenSymbol[0].toString()
  });
  TokenUnit.setAbbr(tokenSymbol[0].toString());

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
        "id": "AccountId",
        "provider": "AccountId",
        "order": "Option<Hash>",
        "ip": "Vec<u8>",
        "dns": "Vec<u8>",
        "props": "BTreeMap<Vec<u8>, Vec<u8>>",
        "state": "GeodeState",
        "promise": "u32"
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
          "Instantiated",
          "Unknown",
          "Offline"
        ]
      },
      "DealId": "AccountId",
      "OrderId": "AccountId",
      "AmountType": "u128",
      "PriceType": "u128",
      "OrderType": {
        "_enum": [
          "Buy",
          "Sell"
        ]
      },
      "CancelOrMatch": {
        "_enum": [
          "Match",
          "Cancel"
        ]
      },
      "OrderPair": {
        "first": "Vec<u8>",
        "second": "Vec<u8>"
      },
      "OrderStatus": {
        "_enum": [
          "Valid",
          "Canceled",
          "Finished"
        ]
      },
      "Bid": {
        "nodeid": "u128",
        "price": "PriceType",
        "sum": "AmountType",
        "list": "Vec<u128>"
      },
      "ActionRecord": {
        "action": "u64",
        "proof": "Vec<u8>",
        "header_hash": "H256"
      },
      "BestHeaderT": {
        "number": "u64",
        "hash": "H256"
      },
      "BidDetailT": {
        "id": "u128",
        "pair": "OrderPair",
        "order_type": "OrderType",
        "user": "AccountId",
        "price": "PriceType",
        "amount": "AmountType",
        "time": "BlockNumber"
      },
      "OrderInfo": {
        "who": "AccountId",
        "order_type": "OrderType",
        "pair": "OrderPair",
        "amount": "AmountType",
        "price": "PriceType",
        "left": "PriceType",
        "status": "OrderStatus",
        "index": "u128",
        "time": "BlockNumber",
        "fill_index": "Vec<u128>"
      },
      "TokenDetail": {
        "uid": "u64",
        "name": "Vec<u8>",
        "address": "Vec<u8>",
        "chain": "Vec<u8>",
        "precision": "u64",
        "extra": "Vec<u8>",
        "identity": "Vec<u8>"
      },
      "Node": {
        "prev": "Option<u128>",
        "next": "Option<u128>",
        "data": "Bid"
      },
      "MultiNodeIndex": {
        "index": "u128",
        "multi_key": "(OrderPair, OrderType)"
      },
      "WithdrawDetail": {
        "uid": "u64",
        "actor": "AccountId",
        "token": "Vec<u8>",
        "value": "AmountType",
        "receiver": "Vec<u8>"
      },
      "DepositDetail": {
        "uid": "Vec<u8>",
        "actor": "Vec<u8>",
        "token": "Vec<u8>",
        "value": "AmountType",
        "receiver": "AccountId",
        "chain": "Vec<u8>"
      },
      "AuthorInfo": {
        "previous": "(Vec<H160>, u32)",
        "current": "(Vec<H160>, u32)",
        "uid": "u64"
      },
      "BlockHeaderu32": {
        "version": "u32",
        "previous_header_hash": "H256",
        "merkle_root_hash": "H256",
        "time": "u32",
        "bits": "u32",
        "nonce": "u32"
      },
      "DepthInfo": {
        "buy": "Vec<DepthItem>",
        "sell": "Vec<DepthItem>"
      },
      "DepthItem": {
        "price": "u64",
        "total": "u64"
      },
      "VerifiableProof": {
        "key": "Bytes",
        "value": "Bytes",
        "proofs": "Vec<Bytes>"
      },
      "TransportRelayTx": {
        "block_hash": "H256",
        "raw": "Transaction",
        "merkle_proof": "PartialMerkleTreeForTransport",
        "previous_raw": "Transaction"
      },
      "Transaction": {
        "version": "i32",
        "inputs": "Vec<TransactionInput>",
        "outputs": "Vec<TransactionOutput>",
        "lock_time": "u32"
      },
      "TransactionInput": {
        "previous_output": "OutPoint",
        "script_sig": "Bytes",
        "sequence": "u32",
        "script_witness": "Vec<Bytes>"
      },
      "OutPoint": {
        "hash": "H256",
        "index": "u32"
      },
      "TransactionOutput": {
        "value": "u64",
        "script_pubkey": "Bytes"
      },
      "PartialMerkleTreeForTransport": {
        "tx_count": "u32",
        "hashes": "Vec<H256>",
        "flags": "Vec<u8>"
      },
      "CandidateTx": {
        "tx": "Transaction",
        "unexpect": "bool",
        "confirmed": "bool",
        "block_hash": "H256",
        "outs": "Vec<(AccountId, u32)>",
        "outputs": "Vec<SeOutput>",
        "proposers": "Vec<AccountId>"
      },
      "SeOutput": {
        "hash": "H160",
        "val": "u32"
      },
      "BlockHeader": {
        "version": "u32",
        "previous_header_hash": "H256",
        "merkle_root_hash": "H256",
        "time": "u32",
        "bits": "Compact<u32>",
        "nonce": "u32"
      },
      "BestHeader": {
        "number": "u32",
        "hash": "H256"
      },
      "PawnType": {
        "rate": "Balance",
        "cr": "Balance",
        "nd": "Balance",
        "penalty": "Balance",
        "ceiling": "Balance",
        "floor": "Balance"
      },
      "Cdp": {
        "pawn": "Balance",
        "nd": "Balance",
        "edit_time": "Time",
        "cliff": "Balance",
        "rate": "Balance"
      },
      "Bids": {
        "bid": "Balance",
        "lot": "Balance",
        "guy": "AccountId",
        "tic": "Time",
        "end": "Time",
        "usr": "AccountId",
        "td": "Balance",
        "start": "Time",
        "cdp": "u64"
      },
      "Feed": {
        "price": "Balance",
        "has": "bool"
      },
      "Time": "Moment",
      "PerMill": "u32",
      "RegionT": {
        "id": "u64",
        "name": "Vec<u8>",
        "admin": "AccountId",
        "treasure": "AccountId",
        "taker_rate": "PerMill",
        "maker_rate": "PerMill",
        "pairs": "Vec<OrderPair>"
      },
      "BtcAddress": {
        "kind": "Type",
        "network": "Network",
        "hash": "AddressHash"
      },
      "Network": {
        "_enum": [
          "Testnet",
          "Mainnet"
        ]
      },
      "AddressHash": "H160",
      "ResourceId": "[u8; 32]",
      "DepositNonce": "u64",
      "ProposalVotes": {
        "votes_for": "Vec<AccountId>",
        "votes_against": "Vec<AccountId>",
        "status": "enum"
      },
      "BridgeTokenId": "U256",
      "BridgeChainId": "u8"
    };

    //custom rpc methods
    // const rpc = {
    //   transfer: {
    //     transferToSubstrateAccount: {
    //       description: "Transfer from evm account to substrate account",
    //       params: [
    //         {
    //           name: "message",
    //           type: "String"
    //         },
    //         {
    //           name: "signature",
    //           type: "String"
    //         }
    //       ],
    //       type: "u64"
    //     },
    //     transferNonce: {
    //       description: "Get current transfer nonce",
    //       params: [
    //         {
    //           name: "evm_addr",
    //           type: "String"
    //         }
    //       ],
    //       type: "u32"
    //     }
    //   }
    // };

    // api = new ApiPromise({ provider, registry, signer, types, typesBundle, typesChain, typesSpec, rpc });
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
