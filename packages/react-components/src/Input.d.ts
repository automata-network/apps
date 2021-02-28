import React from 'react';
declare type Input$Type = 'number' | 'password' | 'text';
interface Props {
    autoFocus?: boolean;
    children?: React.ReactNode;
    className?: string;
    defaultValue?: string | null;
    help?: React.ReactNode;
    icon?: React.ReactNode;
    inputClassName?: string;
    isAction?: boolean;
    isDisabled?: boolean;
    isDisabledError?: boolean;
    isEditable?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isHidden?: boolean;
    isInPlaceEditor?: boolean;
    isReadOnly?: boolean;
    isSmall?: boolean;
    isWarning?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    max?: number;
    maxLength?: number;
    min?: number;
    name?: string;
    onEnter?: boolean | (() => void);
    onEscape?: () => void;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<Element>) => void;
    onKeyUp?: (event: React.KeyboardEvent<Element>) => void;
    onKeyPress?: (event: React.KeyboardEvent<Element>) => void;
    onPaste?: (event: React.ClipboardEvent<Element>) => void;
    placeholder?: string;
    tabIndex?: number;
    type?: Input$Type;
    value?: string | null;
    withLabel?: boolean;
    withEllipsis?: boolean;
}
declare const KEYS: {
    A: string;
    ALT: string;
    ARROW_LEFT: string;
    ARROW_RIGHT: string;
    BACKSPACE: string;
    C: string;
    CMD: string;
    CTRL: string;
    ENTER: string;
    ESCAPE: string;
    TAB: string;
    V: string;
    X: string;
    ZERO: string;
};
declare const KEYS_PRE: any[];
declare const isCopy: (key: string, isPreKeyDown: boolean) => boolean;
declare const isCut: (key: string, isPreKeyDown: boolean) => boolean;
declare const isPaste: (key: string, isPreKeyDown: boolean) => boolean;
declare const isSelectAll: (key: string, isPreKeyDown: boolean) => boolean;
declare function Input({ autoFocus, children, className, defaultValue, help, icon, inputClassName, isAction, isDisabled, isDisabledError, isEditable, isError, isFull, isHidden, isInPlaceEditor, isReadOnly, isWarning, label, labelExtra, max, maxLength, min, name, onBlur, onChange, onEnter, onEscape, onKeyDown, onKeyUp, onPaste, placeholder, tabIndex, type, value, withEllipsis, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Input>;
export default _default;
export { isCopy, isCut, isPaste, isSelectAll, KEYS, KEYS_PRE };
