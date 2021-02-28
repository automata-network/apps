import type { Hash } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    value: Hash;
}
declare function ExternalCell({ className, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ExternalCell>;
export default _default;
