import React from 'react';
interface Props {
    className?: string;
    isMember: boolean;
    members: string[];
}
declare function ProposeExternal({ className, isMember, members }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ProposeExternal>;
export default _default;
