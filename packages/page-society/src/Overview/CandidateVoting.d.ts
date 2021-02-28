import React from 'react';
interface Props {
    candidateId: string;
    isMember: boolean;
    ownMembers: string[];
}
declare function CandidateVoting({ candidateId, isMember, ownMembers }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CandidateVoting>;
export default _default;
