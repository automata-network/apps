import type { Hash, Proposal, ProposalIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    hasFailed: boolean;
    hash: Hash;
    idNumber: ProposalIndex;
    members: string[];
    proposal: Proposal;
}
declare function Close({ hasFailed, hash, idNumber, members, proposal }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Close>;
export default _default;
