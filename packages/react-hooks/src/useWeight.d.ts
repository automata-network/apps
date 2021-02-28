import type { Call } from '@polkadot/types/interfaces';
import BN from 'bn.js';
export declare function useWeight(call?: Call | null): [BN, number];
