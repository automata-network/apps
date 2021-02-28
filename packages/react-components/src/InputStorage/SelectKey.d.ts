import type { QueryableStorageEntry } from '@polkadot/api/types';
import type { DropdownOptions } from '../util/types';
import React from 'react';
interface Props {
    className?: string;
    isError?: boolean;
    onChange: (value: QueryableStorageEntry<'promise'>) => void;
    options: DropdownOptions;
    value: QueryableStorageEntry<'promise'>;
}
declare function SelectKey(props: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof SelectKey>;
export default _default;
