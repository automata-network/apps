import type { ProposalIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    id: ProposalIndex;
    isDisabled: boolean;
    members: string[];
}
declare function Council({ id, isDisabled, members }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Council>;
export default _default;
