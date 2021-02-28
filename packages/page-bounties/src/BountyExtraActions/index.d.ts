import React from 'react';
import { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import { BlockNumber, BountyIndex, BountyStatus } from '@polkadot/types/interfaces';
interface Props {
    bestNumber: BlockNumber;
    className?: string;
    description: string;
    index: BountyIndex;
    proposals?: DeriveCollectiveProposal[];
    status: BountyStatus;
}
declare function Index({ bestNumber, className, description, index, proposals, status }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Index, any, {}, never>>;
export default _default;
