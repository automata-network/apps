import type { AccountId, Hash } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    imageHash: Hash;
    isMember: boolean;
    members: string[];
    prime?: AccountId | null;
}
declare function Proposal({ className, imageHash, members, prime }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Proposal>;
export default _default;
