import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import type { DropdownOptions } from '../util/types';
import React from 'react';
import { ApiPromise } from '@polkadot/api';
interface Props {
    api: ApiPromise;
    className?: string;
    isError?: boolean;
    onChange: (value: SubmittableExtrinsicFunction<'promise'>) => void;
    options: DropdownOptions;
    value: SubmittableExtrinsicFunction<'promise'>;
}
declare function SelectMethod({ api, className, isError, onChange, options, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof SelectMethod>;
export default _default;
