import type { Moment } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    label?: React.ReactNode;
    value?: Moment;
}
declare function TimeNow({ children, className, label, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TimeNow>;
export default _default;
