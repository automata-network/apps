import type { PayoutStash } from './types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    payout: PayoutStash;
    stakerPayoutsAfter: BN;
}
declare function Stash({ className, isDisabled, payout: { available, rewards, stashId }, stakerPayoutsAfter }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Stash>;
export default _default;
