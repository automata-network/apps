import type { DateState } from './types';
export declare function newZeroDate(input: Date): Date;
export declare function nextMonth(date: Date, firstDay?: number): Date;
export declare function prevMonth(date: Date): Date;
export declare function getDateState(_dateMonth: Date, _dateSelected: Date): DateState;
export declare function dateCalendarFormat(date: Date): string;
