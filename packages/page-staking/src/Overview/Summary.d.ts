import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    isVisible: boolean;
    nominators?: string[];
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
}
declare function Summary({ className, isVisible, stakingOverview, targets: { inflation: { inflation }, nominators, waitingIds } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Summary, any, {}, never>>;
export default _default;
