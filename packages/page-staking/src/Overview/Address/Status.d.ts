import BN from 'bn.js';
import React from 'react';
interface Props {
    isElected: boolean;
    isMain?: boolean;
    nominators?: {
        nominatorId: string;
    }[];
    onlineCount?: false | BN;
    onlineMessage?: boolean;
}
declare function Status({ isElected, isMain, nominators, onlineCount, onlineMessage }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Status>;
export default _default;
