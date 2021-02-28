import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { BountyStatus } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    option: 'ayes' | 'nays';
    proposals: DeriveCollectiveProposal[];
    status: BountyStatus;
}
declare function VotersColumn({ className, option, proposals, status }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof VotersColumn, any, {}, never>>;
export default _default;
