import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    defaultId: string | null;
    hashes?: string[] | null;
    isMember: boolean;
    members: string[];
    onRefresh: () => void;
    onSelectTip: (hash: string, isSelected: boolean, value: BN) => void;
}
declare function Tips({ className, defaultId, hashes, isMember, members, onRefresh, onSelectTip }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tips, any, {}, never>>;
export default _default;
