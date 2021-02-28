import type { StakerState } from '@polkadot/react-hooks/types';
import type { SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    isInElection?: boolean;
    ownStashes?: StakerState[];
    next?: string[];
    validators?: string[];
    targets: SortedTargets;
}
declare function Actions({ className, isInElection, ownStashes, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Actions>;
export default _default;
