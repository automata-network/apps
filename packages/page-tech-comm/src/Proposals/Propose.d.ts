import React from 'react';
interface Props {
    isMember: boolean;
    members: string[];
}
declare function Propose({ isMember, members }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Propose>;
export default _default;
