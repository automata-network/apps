import React from 'react';
interface Props {
    autoFocus?: boolean;
    children?: React.ReactNode;
    className?: string;
    defaultValue?: string;
    help?: string;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    label?: string;
    labelExtra?: React.ReactNode;
    name?: string;
    onChange: (value: string) => void;
    onEnter?: () => void;
    onEscape?: () => void;
    tabIndex?: number;
    value: string;
    withLabel?: boolean;
}
declare function Password({ autoFocus, children, className, defaultValue, help, isDisabled, isError, isFull, label, labelExtra, name, onChange, onEnter, onEscape, tabIndex, value, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Password>;
export default _default;
