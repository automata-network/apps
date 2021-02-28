import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { SortedTargets } from '../types';
import React from 'react';
interface Props {
    favorites: string[];
    hasQueries: boolean;
    isIntentions?: boolean;
    setNominators?: (nominators: string[]) => void;
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
    toggleFavorite: (address: string) => void;
}
declare function CurrentList({ favorites, hasQueries, isIntentions, stakingOverview, targets, toggleFavorite }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof CurrentList>;
export default _default;
