import type { AccountId, BountyIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    curatorId: AccountId;
    index: BountyIndex;
    toggleOpen: () => void;
}
declare function BountyRejectCurator({ curatorId, index, toggleOpen }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof BountyRejectCurator>;
export default _default;
