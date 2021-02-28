import type { EntryInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    dateMonth: Date;
    day: number;
    isCurrent: boolean;
    isDisabled: boolean;
    setDay: (day: number) => void;
    scheduled: EntryInfo[];
}
declare function MonthDay({ className, dateMonth, day, isCurrent, isDisabled, scheduled, setDay }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof MonthDay, any, {}, never>>;
export default _default;
