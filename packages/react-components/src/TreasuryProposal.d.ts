import type { TreasuryProposal as TreasuryProposalType } from '@polkadot/types/interfaces';
import React from 'react';
import { InsetProps } from './Inset';
interface Props {
    className?: string;
    asInset?: boolean;
    insetProps?: Partial<InsetProps>;
    onClick?: () => void;
    proposalId?: string;
    proposal?: TreasuryProposalType | null;
    withLink?: boolean;
}
declare function TreasuryProposal({ asInset, className, insetProps, onClick, proposal, proposalId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof TreasuryProposal>;
export default _default;
