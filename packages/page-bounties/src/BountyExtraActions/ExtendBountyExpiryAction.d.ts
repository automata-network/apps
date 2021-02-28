import type { AccountId, BountyIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    curatorId: AccountId;
    description: string;
    index: BountyIndex;
    toggleOpen: () => void;
}
declare function ExtendBountyExpiryAction({ curatorId, description, index, toggleOpen }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ExtendBountyExpiryAction>;
export default _default;
