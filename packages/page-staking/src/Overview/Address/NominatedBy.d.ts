import type { SlashingSpans } from '@polkadot/types/interfaces';
import type { NominatedBy as NominatedByType } from '../../types';
import React from 'react';
interface Props {
    nominators?: NominatedByType[];
    slashingSpans?: SlashingSpans | null;
}
declare function NominatedBy({ nominators, slashingSpans }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NominatedBy>;
export default _default;
