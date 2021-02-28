import type { DateState, EntryInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    hasNextMonth: boolean;
    lastDay: number;
    now: Date;
    scheduled: EntryInfo[];
    setDay: (day: number) => void;
    setNextMonth: () => void;
    setPrevMonth: () => void;
    state: DateState;
}
declare function Month({ className, hasNextMonth, lastDay, now, scheduled, setDay, setNextMonth, setPrevMonth, state: { dateMonth, dateSelected, days, startClass } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Month, any, {}, never>>;
export default _default;
