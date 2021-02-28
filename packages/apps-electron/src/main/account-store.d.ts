import { FileStore } from '@polkadot/ui-keyring/stores';
import { IpcMainHandler } from './ipc-main-handler';
export declare const accountStoreIpcHandler: (fileStore: FileStore) => IpcMainHandler;
export declare const registerAccountStoreHandlers: () => void;
