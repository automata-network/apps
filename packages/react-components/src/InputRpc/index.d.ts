import type { DefinitionRpcExt } from '@polkadot/types/types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: DefinitionRpcExt;
    help?: React.ReactNode;
    isError?: boolean;
    label: React.ReactNode;
    onChange?: (value: DefinitionRpcExt) => void;
    withLabel?: boolean;
}
declare function InputRpc({ className, defaultValue, help, label, onChange, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputRpc>;
export default _default;
