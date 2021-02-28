import type { KeyedEvent } from '@polkadot/react-query/types';
import React from 'react';
interface Props {
    className?: string;
    emptyLabel?: React.ReactNode;
    events?: KeyedEvent[];
    eventClassName?: string;
    label?: React.ReactNode;
}
declare function Events({ className, emptyLabel, eventClassName, events, label }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Events, any, {}, never>>;
export default _default;
