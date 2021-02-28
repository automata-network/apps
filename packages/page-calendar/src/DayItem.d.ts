import type { EntryInfoTyped } from './types';
import React from 'react';
interface Props {
    className?: string;
    showAllEvents?: boolean;
    item: EntryInfoTyped;
}
declare function DayItem({ className, item: { date, info, type }, showAllEvents }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof DayItem, any, {}, never>>;
export default _default;
