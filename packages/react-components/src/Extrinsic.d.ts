import type { SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api/types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: SubmittableExtrinsicFunction<'promise'>;
    isDisabled?: boolean;
    isError?: boolean;
    isPrivate?: boolean;
    label?: React.ReactNode;
    onChange: (method?: SubmittableExtrinsic<'promise'>) => void;
    onEnter?: () => void;
    onError?: (error?: Error | null) => void;
    onEscape?: () => void;
    withLabel?: boolean;
}
declare function ExtrinsicDisplay({ defaultValue, isDisabled, isError, isPrivate, label, onChange, onEnter, onError, onEscape, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ExtrinsicDisplay>;
export default _default;
