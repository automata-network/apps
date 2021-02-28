import type { Hash, Proposal } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    imageHash: Hash | string;
    proposal?: Proposal | null;
}
declare function ProposalCell({ className, imageHash, proposal }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ProposalCell>;
export default _default;
