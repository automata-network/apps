import React from 'react';
interface Props {
    className?: string;
    hashes?: string[] | null;
    isMember: boolean;
    members: string[];
    trigger: () => void;
}
declare function TipsEntry({ className, hashes, isMember, members, trigger }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TipsEntry>;
export default _default;
