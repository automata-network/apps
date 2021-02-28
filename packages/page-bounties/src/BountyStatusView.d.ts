import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { BountyStatus } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
import { StatusName } from './types';
interface Props {
    blocksUntilPayout?: BN;
    bountyStatus: StatusName;
    className?: string;
    proposals?: DeriveCollectiveProposal[];
    status: BountyStatus;
}
declare function BountyStatusView({ blocksUntilPayout, bountyStatus, className, proposals, status }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof BountyStatusView, any, {}, never>>;
export default _default;
