import type { AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    prime: AccountId | null;
}
declare function Overview({ className, prime }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
