import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { Balance, BountyIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    description: string;
    index: BountyIndex;
    proposals?: DeriveCollectiveProposal[];
    value: Balance;
}
declare function ProposeCuratorAction({ description, index, proposals, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ProposeCuratorAction>;
export default _default;
