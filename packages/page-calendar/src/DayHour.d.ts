import type { EntryInfoTyped } from './types';
import React from 'react';
interface Props {
    className?: string;
    date: Date;
    hour: number;
    index: number;
    minutes: number;
    scheduled: EntryInfoTyped[];
}
declare function DayHour({ className, date, hour, index, minutes, scheduled }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof DayHour, any, {}, never>>;
export default _default;
