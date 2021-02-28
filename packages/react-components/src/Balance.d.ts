import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
export interface RenderProps {
    className?: string;
    label?: React.ReactNode;
    value?: BN | BN[];
}
export interface Props {
    balance?: BN | BN[];
    className?: string;
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    withLabel?: boolean;
}
export declare function renderProvided({ className, label, value }: RenderProps): React.ReactNode;
declare function BalanceDisplay(props: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof BalanceDisplay>;
export default _default;
