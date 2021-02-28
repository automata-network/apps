import React from 'react';
interface Props {
    allMembers: string[];
    className?: string;
    isMember: boolean;
    ownMembers: string[];
}
declare function Candidates({ allMembers, className, isMember, ownMembers }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Candidates>;
export default _default;
