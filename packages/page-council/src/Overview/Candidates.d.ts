import type { DeriveElectionsInfo } from '@polkadot/api-derive/types';
import type { AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    allVotes?: Record<string, AccountId[]>;
    className?: string;
    electionsInfo?: DeriveElectionsInfo;
}
declare function Candidates({ allVotes, electionsInfo }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Candidates>;
export default _default;
