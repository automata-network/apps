import type { DeriveTreasuryProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    isMember: boolean;
    members: string[];
    onRespond: () => void;
    proposal: DeriveTreasuryProposal;
    withSend: boolean;
}
declare function ProposalDisplay({ className, isMember, members, proposal: { council, id, proposal }, withSend }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ProposalDisplay>;
export default _default;
