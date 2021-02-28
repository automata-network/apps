import type { VoteThreshold } from '@polkadot/types/interfaces';
import BN from 'bn.js';
interface Approx {
    changeAye: BN;
    changeNay: BN;
}
interface ApproxState {
    votedAye: BN;
    votedNay: BN;
    votedTotal: BN;
}
export declare function approxChanges(threshold: VoteThreshold, sqrtElectorate: BN, state: ApproxState): Approx;
export {};
