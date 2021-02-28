import React from 'react';
interface Props {
    className?: string;
    isMember: boolean;
    members: string[];
}
declare function Overview({ className, isMember, members }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
