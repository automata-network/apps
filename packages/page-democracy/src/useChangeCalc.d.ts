import type { VoteThreshold } from '@polkadot/types/interfaces';
import BN from 'bn.js';
interface Result {
    changeAye: BN;
    changeNay: BN;
}
export default function useChangeCalc(threshold: VoteThreshold, votedAye: BN, votedNay: BN, votedTotal: BN): Result;
export {};
