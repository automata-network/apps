import type { ParachainProposal, ParaId, SessionIndex } from '@polkadot/types/interfaces';
export interface ProposalExt {
    id: ParaId;
    isApproved: boolean;
    isScheduled: boolean;
    proposal?: ParachainProposal;
}
export interface ScheduledProposals {
    scheduledIds: ParaId[];
    sessionIndex: SessionIndex;
}
export interface Proposals {
    approvedIds: ParaId[];
    proposalIds: ParaId[];
    scheduled: ScheduledProposals[];
}
