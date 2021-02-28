import type { AccountId, BountyIndex } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    curatorId: AccountId;
    fee: BN;
    index: BountyIndex;
}
declare function BountyAcceptCurator({ curatorId, fee, index }: Props): JSX.Element | null;
declare const _default: React.MemoExoticComponent<typeof BountyAcceptCurator>;
export default _default;
