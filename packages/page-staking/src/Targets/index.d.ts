import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { StakerState } from '@polkadot/react-hooks/types';
import type { SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    isInElection: boolean;
    ownStashes?: StakerState[];
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
    toggleFavorite: (address: string) => void;
    toggleLedger: () => void;
}
declare function Targets({ className, isInElection, ownStashes, targets: { avgStaked, inflation: { stakedReturn }, lowStaked, medianComm, minNominated, nominators, totalIssuance, totalStaked, validatorIds, validators }, toggleFavorite, toggleLedger }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Targets, any, {}, never>>;
export default _default;
