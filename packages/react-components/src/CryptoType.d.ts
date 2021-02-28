import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    accountId: AccountId | AccountIndex | Address | string | Uint8Array | null;
    className?: string;
    label?: string;
}
declare function CryptoType({ accountId, className, label }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CryptoType>;
export default _default;
