import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { BlockNumber, Bounty as BountyType, BountyIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    bestNumber: BlockNumber;
    bounty: BountyType;
    className?: string;
    description: string;
    index: BountyIndex;
    proposals?: DeriveCollectiveProposal[];
}
declare function Bounty({ bestNumber, bounty, className, description, index, proposals }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Bounty, any, {}, never>>;
export default _default;
