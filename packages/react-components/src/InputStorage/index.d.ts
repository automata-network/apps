import type { QueryableStorageEntry } from '@polkadot/api/types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: QueryableStorageEntry<'promise'>;
    help?: React.ReactNode;
    isError?: boolean;
    label: React.ReactNode;
    onChange?: (value: QueryableStorageEntry<'promise'>) => void;
    withLabel?: boolean;
}
declare function InputStorage({ className, defaultValue, help, label, onChange, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputStorage>;
export default _default;
