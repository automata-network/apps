import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import type { DropdownOptions } from '../util/types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue?: string;
    isError?: boolean;
    onChange: (value: string) => void;
    options: DropdownOptions;
    value: SubmittableExtrinsicFunction<'promise'>;
}
declare function SelectSection({ className, defaultValue, isError, onChange, options, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SelectSection>;
export default _default;
