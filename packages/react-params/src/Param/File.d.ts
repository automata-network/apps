import React from 'react';
interface Props {
    className?: string;
    defaultValue?: any;
    isDisabled?: boolean;
    isError?: boolean;
    label?: React.ReactNode;
    onChange?: (contents: Uint8Array) => void;
    placeholder?: string;
    withLabel?: boolean;
}
declare function File({ className, isDisabled, isError, label, onChange, placeholder, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof File>;
export default _default;
