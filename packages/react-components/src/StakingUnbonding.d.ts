import type { DeriveStakingAccount } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    stakingInfo?: DeriveStakingAccount;
}
declare function StakingUnbonding({ className, stakingInfo }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof StakingUnbonding, any, {}, never>>;
export default _default;
