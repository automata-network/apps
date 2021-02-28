import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    isCouncil?: boolean;
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
}
declare function BalanceVoting({ children, className, isCouncil, label, params }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BalanceVoting>;
export default _default;
