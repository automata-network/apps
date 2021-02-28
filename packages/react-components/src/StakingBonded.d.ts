import type { DeriveStakingAccount } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    stakingInfo?: DeriveStakingAccount;
}
declare function StakingBonded({ className, stakingInfo }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof StakingBonded>;
export default _default;
