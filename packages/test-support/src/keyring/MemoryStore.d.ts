import type { KeyringJson, KeyringStore } from '@polkadot/ui-keyring/types';
export declare class MemoryStore implements KeyringStore {
    private accounts;
    all(cb: (key: string, value: KeyringJson) => void): void;
    get(key: string, cb: (value: KeyringJson) => void): void;
    remove(key: string, cb: (() => void) | undefined): void;
    set(key: string, value: KeyringJson, cb: (() => void) | undefined): void;
}
