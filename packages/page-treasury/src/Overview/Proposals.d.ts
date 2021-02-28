import type { DeriveTreasuryProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    isApprovals?: boolean;
    isMember: boolean;
    members: string[];
    proposals?: DeriveTreasuryProposal[];
}
declare function ProposalsBase({ className, isApprovals, isMember, members, proposals }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ProposalsBase>;
export default _default;
