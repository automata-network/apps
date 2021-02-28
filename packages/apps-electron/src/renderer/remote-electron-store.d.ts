import type { KeyringJson, KeyringStore } from '@polkadot/ui-keyring/types';
import { AccountStoreApi } from '../api/account-store-api';
export declare class RemoteElectronStore implements KeyringStore {
    #private;
    constructor(accountStore: AccountStoreApi);
    all(cb: (key: string, value: KeyringJson) => void): void;
    get(key: string, cb: (value: KeyringJson) => void): void;
    remove(key: string, cb: (() => void) | undefined): void;
    set(key: string, value: KeyringJson, cb: (() => void) | undefined): void;
}
