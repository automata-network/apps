import type { KeyringJson } from '@polkadot/ui-keyring/types';
export interface AccountStoreApi {
    all: () => Promise<{
        key: string;
        value: KeyringJson;
    }[]>;
    get: (key: string) => Promise<KeyringJson>;
    remove: (key: string) => Promise<void>;
    set: (key: string, value: KeyringJson) => Promise<void>;
}
