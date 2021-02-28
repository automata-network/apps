import React from 'react';
import { Abi } from '@polkadot/api-contract';
interface Props {
    className?: string;
    contractAbi?: Abi | null;
    errorText?: string | null;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    isSupplied?: boolean;
    label?: React.ReactNode;
    onChange: (u8a: Uint8Array, name: string) => void;
    onRemove?: () => void;
    onRemoved?: () => void;
    onSelect?: () => void;
    onSelectConstructor?: (index?: number) => void;
    withConstructors?: boolean;
    withLabel?: boolean;
    withMessages?: boolean;
    withWasm?: boolean;
}
declare function ABI({ className, contractAbi, errorText, isDisabled, isError, isFull, isValid, label, onChange, onRemove, onSelectConstructor, withConstructors, withLabel, withMessages, withWasm }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ABI>;
export default _default;
