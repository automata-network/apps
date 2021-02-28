import type { EventRecord } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    value: EventRecord;
}
declare function Event({ className, value: { event } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Event>;
export default _default;
