import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { AccountId, BountyStatus } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    beneficiary?: AccountId;
    blocksUntilUpdate?: BN;
    proposals?: DeriveCollectiveProposal[];
    status: BountyStatus;
}
export declare const BLOCKS_PERCENTAGE_LEFT_TO_SHOW_WARNING = 10;
declare function BountyInfos({ beneficiary, blocksUntilUpdate, proposals, status }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof BountyInfos>;
export default _default;
