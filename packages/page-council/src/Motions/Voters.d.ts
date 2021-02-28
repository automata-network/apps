import type { AccountId, MemberCount } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    isAye?: boolean;
    members: string[];
    votes: AccountId[];
    threshold: MemberCount;
}
declare function Voters({ isAye, members, threshold, votes }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Voters>;
export default _default;
