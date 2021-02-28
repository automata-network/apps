import type { ApiPromise } from '@polkadot/api';
import type { Time } from '@polkadot/util/types';
import BN from 'bn.js';
declare type Result = [number, string, Time];
export declare function useBlockTime(blocks?: BN, apiOverride?: ApiPromise): Result;
export {};
