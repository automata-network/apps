import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import type { RawParamOnChange, RawParamOnEnter, RawParamOnEscape } from '@polkadot/react-params/types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: SubmittableExtrinsicFunction<'promise'>;
    isDisabled?: boolean;
    isError?: boolean;
    isPrivate: boolean;
    label: React.ReactNode;
    onChange?: RawParamOnChange;
    onEnter?: RawParamOnEnter;
    onEscape?: RawParamOnEscape;
    withLabel?: boolean;
}
declare function ExtrinsicDisplay({ className, defaultValue, isDisabled, isError, isPrivate, label, onChange, onEnter, onEscape, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ExtrinsicDisplay>;
export default _default;
