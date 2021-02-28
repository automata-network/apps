import type { Event } from '@polkadot/types/interfaces';
import React from 'react';
export interface Props {
    children?: React.ReactNode;
    className?: string;
    value: Event;
}
declare function EventDisplay({ children, className, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof EventDisplay>;
export default _default;
