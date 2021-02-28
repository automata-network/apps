import type { TypeDef } from '@polkadot/types/types';
import type { RawParam, RawParamOnChange, RawParamOnEnter, RawParamOnEscape, Size } from '../types';
import React from 'react';
interface Props {
    asHex?: boolean;
    children?: React.ReactNode;
    className?: string;
    defaultValue: RawParam;
    isDisabled?: boolean;
    isError?: boolean;
    label?: React.ReactNode;
    length?: number;
    name?: string;
    onChange?: RawParamOnChange;
    onEnter?: RawParamOnEnter;
    onEscape?: RawParamOnEscape;
    size?: Size;
    type: TypeDef & {
        withOptionActive?: boolean;
    };
    validate?: (u8a: Uint8Array) => boolean;
    withCopy?: boolean;
    withLabel?: boolean;
    withLength?: boolean;
}
declare function BaseBytes({ asHex, children, className, defaultValue: { value }, isDisabled, isError, label, length, onChange, onEnter, onEscape, size, validate, withCopy, withLabel, withLength }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BaseBytes>;
export default _default;
