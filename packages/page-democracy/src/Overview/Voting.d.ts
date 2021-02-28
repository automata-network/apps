import type { PropIndex, Proposal } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    proposal?: Proposal;
    referendumId: PropIndex;
}
declare function Voting({ proposal, referendumId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Voting>;
export default _default;
