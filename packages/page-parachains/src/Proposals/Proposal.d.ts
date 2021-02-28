import type { ParaId } from '@polkadot/types/interfaces';
import type { ScheduledProposals } from '../types';
import React from 'react';
interface Props {
    approvedIds: ParaId[];
    id: ParaId;
    scheduled: ScheduledProposals[];
}
declare function Proposal({ approvedIds, id, scheduled }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Proposal>;
export default _default;
