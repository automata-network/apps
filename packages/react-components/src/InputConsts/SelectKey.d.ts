import type { DropdownOptions } from '../util/types';
import type { ConstValueBase } from './types';
import React from 'react';
interface Props {
    className?: string;
    isError?: boolean;
    onChange: (value: ConstValueBase) => void;
    options: DropdownOptions;
    value: ConstValueBase;
}
declare function SelectKey(props: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof SelectKey>;
export default _default;
