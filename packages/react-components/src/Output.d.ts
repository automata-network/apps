import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    help?: React.ReactNode;
    isError?: boolean;
    isFull?: boolean;
    isHidden?: boolean;
    isMonospace?: boolean;
    isSmall?: boolean;
    isTrimmed?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    value?: string;
    withCopy?: boolean;
    withLabel?: boolean;
}
declare function Output({ children, className, help, isError, isFull, isHidden, isMonospace, isSmall, isTrimmed, label, labelExtra, value, withCopy, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Output, any, {}, never>>;
export default _default;
