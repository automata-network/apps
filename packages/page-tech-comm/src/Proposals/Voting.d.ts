import type { AccountId, Hash } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    hash: Hash | string;
    members: string[];
    prime?: AccountId | null;
    proposalId: BN | number;
}
declare function Voting({ hash, members, prime, proposalId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Voting>;
export default _default;
