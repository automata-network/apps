import type { Compact } from '@polkadot/types';
import type { ProposalIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    value: Compact<ProposalIndex>;
}
declare function TreasuryCell({ className, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof TreasuryCell>;
export default _default;
