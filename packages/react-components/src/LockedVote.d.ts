import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
export interface Props {
    className?: string;
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    withLabel?: boolean;
}
declare function LockedVoteDisplay({ className, label, params }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof LockedVoteDisplay>;
export default _default;
