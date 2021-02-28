import type { KeyringOption$Type, KeyringSectionOption } from '@polkadot/ui-keyring/options/types';
import type { Option } from './types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue?: Uint8Array | string | null;
    filter?: string[];
    help?: React.ReactNode;
    hideAddress?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    isInput?: boolean;
    isMultiple?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    onChange?: (value: string | null) => void;
    onChangeMulti?: (value: string[]) => void;
    options?: KeyringSectionOption[];
    optionsAll?: Record<string, Option[]>;
    placeholder?: string;
    type?: KeyringOption$Type;
    value?: string | Uint8Array | string[] | null;
    withEllipsis?: boolean;
    withLabel?: boolean;
}
declare type ExportedType = React.ComponentType<Props> & {
    createOption: (option: KeyringSectionOption, isUppercase?: boolean) => Option;
    setLastValue: (type: KeyringOption$Type, value: string) => void;
};
declare const ExportedComponent: ExportedType;
export default ExportedComponent;
