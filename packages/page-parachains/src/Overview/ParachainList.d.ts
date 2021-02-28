import type { ParaId } from '@polkadot/types/interfaces';
import type { ScheduledProposals } from '../types';
import React from 'react';
interface Props {
    ids?: ParaId[];
    scheduled?: ScheduledProposals[];
}
declare function ParachainList({ ids, scheduled }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ParachainList>;
export default _default;
