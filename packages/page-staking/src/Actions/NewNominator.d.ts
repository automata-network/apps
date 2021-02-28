import type { SortedTargets } from '../types';
import React from 'react';
interface Props {
    isInElection?: boolean;
    targets: SortedTargets;
}
declare function NewNominator({ isInElection, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NewNominator>;
export default _default;
