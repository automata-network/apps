import type { StakerState } from '@polkadot/react-hooks/types';
import type { UnappliedSlash } from '@polkadot/types/interfaces';
import type { SortedTargets } from '../../types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    allSlashes?: [BN, UnappliedSlash[]][];
    className?: string;
    isDisabled?: boolean;
    info: StakerState;
    next?: string[];
    stashId: string;
    targets: SortedTargets;
    validators?: string[];
}
declare function Account({ allSlashes, className, info: { controllerId, destination, hexSessionIdNext, hexSessionIdQueue, isLoading, isOwnController, isOwnStash, isStashNominating, isStashValidating, nominating, sessionIds, stakingLedger, stashId }, isDisabled, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Account, any, {}, never>>;
export default _default;
