import type { DefinitionRpcExt } from '@polkadot/types/types';
import type { DropdownOption } from '../util/types';
import React from 'react';
interface Props {
    className?: string;
    isError?: boolean;
    onChange: (value: DefinitionRpcExt) => void;
    options: DropdownOption[];
    value: DefinitionRpcExt;
}
declare function SelectMethod({ className, isError, onChange, options, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof SelectMethod>;
export default _default;
