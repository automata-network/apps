import type { Votes } from '@polkadot/types/interfaces';
import BN from 'bn.js';
interface State {
    hasFailed: boolean;
    hasPassed: boolean;
    isCloseable: boolean;
    isVoteable: boolean;
    remainingBlocks: BN | null;
}
export declare function useVotingStatus(votes: Votes | null | undefined, numMembers: number, section: 'council' | 'technicalCommittee'): State;
export {};
