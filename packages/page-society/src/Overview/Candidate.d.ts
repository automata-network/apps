import type { DeriveSocietyCandidate } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    allMembers: string[];
    isMember: boolean;
    ownMembers: string[];
    value: DeriveSocietyCandidate;
}
declare function Candidate({ allMembers, isMember, ownMembers, value: { accountId, kind, value } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Candidate>;
export default _default;
