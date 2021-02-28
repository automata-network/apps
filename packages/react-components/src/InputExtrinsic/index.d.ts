import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: SubmittableExtrinsicFunction<'promise'>;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isPrivate?: boolean;
    label: React.ReactNode;
    onChange: (value: SubmittableExtrinsicFunction<'promise'>) => void;
    withLabel?: boolean;
}
declare function InputExtrinsic({ className, defaultValue, help, label, onChange, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputExtrinsic>;
export default _default;
