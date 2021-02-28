import type { ParaId } from '@polkadot/types/interfaces';
import type { ProposalExt, Proposals, ScheduledProposals } from '../types';
export default function useProposals(): Proposals | undefined;
export declare function useProposal(id: ParaId, approvedIds: ParaId[], scheduled: ScheduledProposals[]): ProposalExt;
