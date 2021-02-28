import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { BountyStatus } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    blocksUntilPayout?: BN;
    className?: string;
    proposals?: DeriveCollectiveProposal[];
    status: BountyStatus;
}
declare function ExtendedStatus({ blocksUntilPayout, className, proposals, status }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ExtendedStatus>;
export default _default;
