import BN from 'bn.js';
import React from 'react';
interface Props {
    autoFocus?: boolean;
    children?: React.ReactNode;
    className?: string;
    defaultValue?: BN | string;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isWarning?: boolean;
    isZeroable?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    maxValue?: BN;
    onChange?: (value?: BN) => void;
    onEnter?: () => void;
    onEscape?: () => void;
    placeholder?: string;
    value?: BN;
    withEllipsis?: boolean;
    withLabel?: boolean;
    withMax?: boolean;
}
declare function InputBalance({ autoFocus, children, className, defaultValue: inDefault, help, isDisabled, isError, isFull, isWarning, isZeroable, label, labelExtra, maxValue, onChange, onEnter, onEscape, placeholder, value, withEllipsis, withLabel, withMax }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InputBalance, any, {}, never>>;
export default _default;
