import type { DeriveStakingAccount } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    stakingInfo?: DeriveStakingAccount;
}
declare function StakingRedeemable({ className, stakingInfo }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof StakingRedeemable>;
export default _default;
