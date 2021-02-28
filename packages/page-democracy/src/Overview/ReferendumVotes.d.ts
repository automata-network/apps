import type { DeriveReferendumVote } from '@polkadot/api-derive/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    change: BN;
    className?: string;
    count: number;
    isAye: boolean;
    isWinning: boolean;
    total: BN;
    votes: DeriveReferendumVote[];
}
declare function ReferendumVotes({ change, className, count, isAye, isWinning, total, votes }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ReferendumVotes>;
export default _default;
