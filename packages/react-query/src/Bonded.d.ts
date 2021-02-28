import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    label?: React.ReactNode;
}
declare function BondedDisplay({ children, className, label, params }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BondedDisplay>;
export default _default;
