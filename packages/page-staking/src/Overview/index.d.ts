import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    favorites: string[];
    hasQueries: boolean;
    isIntentions?: boolean;
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
    toggleFavorite: (address: string) => void;
    toggleLedger?: () => void;
}
declare function Overview({ className, favorites, hasQueries, isIntentions, stakingOverview, targets, toggleFavorite, toggleLedger }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
