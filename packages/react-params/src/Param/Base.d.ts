import type { Size } from '../types';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    isDisabled?: boolean;
    isOuter?: boolean;
    label?: React.ReactNode;
    size?: Size;
    withLabel?: boolean;
}
declare function Base({ children, className, isOuter, label, size, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Base>;
export default _default;
