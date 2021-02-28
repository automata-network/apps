import type { SocietyVote } from '@polkadot/types/interfaces';
export interface OwnMembers {
    allMembers: string[];
    isMember: boolean;
    ownMembers: string[];
}
export declare type VoteType = [string, SocietyVote];
export interface VoteSplit {
    allAye: VoteType[];
    allNay: VoteType[];
    allSkeptic: VoteType[];
}
