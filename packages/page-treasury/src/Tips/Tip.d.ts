import type { BlockNumber, OpenTip, OpenTipTo225 } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    bestNumber?: BlockNumber;
    className?: string;
    defaultId: string | null;
    hash: string;
    isMember: boolean;
    members: string[];
    onRefresh: () => void;
    onSelect: (hash: string, isSelected: boolean, value: BN) => void;
    onlyUntipped: boolean;
    tip: OpenTip | OpenTipTo225;
}
declare function Tip({ bestNumber, className, defaultId, hash, isMember, members, onRefresh, onSelect, onlyUntipped, tip }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tip, any, {}, never>>;
export default _default;
