import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
export interface Props {
    className?: string;
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
}
declare function AvailableDisplay({ className, label, params }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof AvailableDisplay>;
export default _default;
