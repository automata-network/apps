import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
}
declare function LockedVote({ children, className, label, params }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof LockedVote>;
export default _default;
