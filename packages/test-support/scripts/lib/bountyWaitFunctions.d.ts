import { ApiPromise } from '@polkadot/api';
import { WaitOptions } from '@polkadot/test-support/utils/waitFor';
declare type bStatus = 'isFunded' | 'isActive';
export declare function waitForBountyState(api: ApiPromise, expectedState: bStatus, index: number, { interval, timeout }?: {
    interval?: number | undefined;
    timeout?: number | undefined;
}): Promise<boolean>;
export declare function waitForClaim(api: ApiPromise, index: number, { interval, timeout }: WaitOptions): Promise<boolean>;
export {};
