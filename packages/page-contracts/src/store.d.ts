import type { Hash } from '@polkadot/types/interfaces';
import type { CodeJson, CodeStored } from './types';
import EventEmitter from 'eventemitter3';
declare class Store extends EventEmitter {
    private allCode;
    get hasCode(): boolean;
    getAllCode(): CodeStored[];
    getCode(codeHash: string): CodeStored | undefined;
    saveCode(codeHash: string | Hash, partial: Partial<CodeJson>): Promise<void>;
    forgetCode(codeHash: string): void;
    loadAll(): Promise<void>;
    private addCode;
    private removeCode;
}
declare const _default: Store;
export default _default;
