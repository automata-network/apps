import type { Slash } from './types';
import React from 'react';
interface Props {
    index: number;
    isSelected: boolean;
    onSelect?: (index: number) => void;
    slash: Slash;
}
declare function Row({ index, isSelected, onSelect, slash: { isMine, slash: { others, own, payout, reporters, validator }, total, totalOther } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Row>;
export default _default;
