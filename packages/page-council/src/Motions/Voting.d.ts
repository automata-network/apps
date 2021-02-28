import type { AccountId, Hash, Proposal, ProposalIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    hash: Hash;
    idNumber: ProposalIndex;
    isDisabled: boolean;
    members: string[];
    prime: AccountId | null;
    proposal: Proposal;
}
declare function Voting({ hash, idNumber, isDisabled, members, prime, proposal }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Voting>;
export default _default;
