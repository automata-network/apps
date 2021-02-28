import React from 'react';
export interface InputFilePropsBase {
    className?: string;
    clearContent?: boolean;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    label: React.ReactNode;
    placeholder?: React.ReactNode | null;
    withEllipsis?: boolean;
    withLabel?: boolean;
}
export interface InputFileProps extends InputFilePropsBase {
    accept?: string;
    onChange?: (contents: Uint8Array, name: string) => void;
}
declare function InputFile({ accept, className, clearContent, help, isDisabled, isError, isFull, label, onChange, placeholder, withEllipsis, withLabel }: InputFileProps): React.ReactElement<InputFileProps>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InputFile, any, {}, never>>;
export default _default;
