import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    defaultValue?: any;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isHidden?: boolean;
    isSmall?: boolean;
    label?: React.ReactNode;
    value?: React.ReactNode;
    withCopy?: boolean;
    withLabel?: boolean;
}
declare function Static({ children, className, defaultValue, help, isFull, isHidden, isSmall, label, value, withCopy, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Static>;
export default _default;
