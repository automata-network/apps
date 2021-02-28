import type { QueryableStorageEntry } from '@polkadot/api/types';
import type { ConstValue } from '@polkadot/react-components/InputConsts/types';
import type { RawParams } from '@polkadot/react-params/types';
interface Base {
    isConst: boolean;
}
interface IdQuery extends Base {
    id: number;
}
export interface PartialModuleQuery extends Base {
    key: QueryableStorageEntry<'promise'>;
    params: RawParams;
}
export declare type StorageModuleQuery = PartialModuleQuery & IdQuery;
export interface PartialRawQuery extends Base {
    key: Uint8Array;
}
export declare type StorageRawQuery = PartialRawQuery & IdQuery;
export interface PartialConstQuery extends Base {
    key: ConstValue;
}
export declare type ConstQuery = PartialConstQuery & IdQuery;
export declare type QueryTypes = StorageModuleQuery | StorageRawQuery | ConstQuery;
export declare type ParitalQueryTypes = PartialModuleQuery | PartialRawQuery | PartialConstQuery;
export interface ComponentProps {
    onAdd: (query: ParitalQueryTypes) => void;
}
export {};
