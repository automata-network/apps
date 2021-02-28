import type { ScheduledExt } from './types';
import React from 'react';
interface Props {
    className?: string;
    value: ScheduledExt;
}
declare function Scheduled({ className, value: { blockNumber, call, maybeId, maybePeriodic } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Scheduled>;
export default _default;
