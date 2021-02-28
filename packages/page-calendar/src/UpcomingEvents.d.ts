import type { EntryInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    scheduled: EntryInfo[];
    setView: (v: boolean) => void;
}
declare function UpcomingEvents({ className, scheduled, setView }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof UpcomingEvents, any, {}, never>>;
export default _default;
