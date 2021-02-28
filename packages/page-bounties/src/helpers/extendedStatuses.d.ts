import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { BountyStatus } from '@polkadot/types/interfaces';
export declare function proposalNameToDisplay(bountyProposals: DeriveCollectiveProposal[], status: BountyStatus): string | undefined;
export declare function getProposalToDisplay(bountyProposals: DeriveCollectiveProposal[], status: BountyStatus): DeriveCollectiveProposal | null;
