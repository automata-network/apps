import type { QueryableStorageMultiArg } from '@polkadot/api/types';
interface CallOptions<T> {
    defaultValue?: T;
    transform?: (value: any) => T;
}
export declare function useCallMulti<T>(calls?: QueryableStorageMultiArg<'promise'>[] | null | false, options?: CallOptions<T>): T;
export {};
