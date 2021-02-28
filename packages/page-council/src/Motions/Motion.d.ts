import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    isMember: boolean;
    members: string[];
    motion: DeriveCollectiveProposal;
    prime: AccountId | null;
}
declare function Motion({ className, isMember, members, motion: { hash, proposal, votes }, prime }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Motion>;
export default _default;
