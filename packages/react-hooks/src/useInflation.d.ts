import type { ApiPromise } from '@polkadot/api';
import type { Inflation } from './types';
import BN from 'bn.js';
export declare function calcInflation(api: ApiPromise, totalStaked: BN, totalIssuance: BN): Inflation;
export declare function useInflation(totalStaked?: BN): Inflation;
