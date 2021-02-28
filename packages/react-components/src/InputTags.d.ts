import React from 'react';
interface Props {
    allowAdd?: boolean;
    className?: string;
    defaultValue?: string[];
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    label?: React.ReactNode;
    onBlur?: () => void;
    onChange?: (value: string[]) => void;
    onClose?: () => void;
    openOnFocus?: boolean;
    placeholder?: string;
    searchInput?: {
        autoFocus: boolean;
    };
    value?: string[];
    withLabel?: boolean;
}
declare function InputTags({ allowAdd, className, defaultValue, help, isDisabled, isError, label, onBlur, onChange, onClose, placeholder, searchInput, value, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputTags>;
export default _default;
