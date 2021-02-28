import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import { ApiPromise } from '@polkadot/api';
import { SubmittableExtrinsic } from '@polkadot/api/types';
export interface ProposalFactory {
    aProposal: (extrinsic: SubmittableExtrinsic<'promise'>, ayes?: string[], nays?: string[]) => DeriveCollectiveProposal;
}
export declare function proposalFactory(api: ApiPromise): ProposalFactory;
