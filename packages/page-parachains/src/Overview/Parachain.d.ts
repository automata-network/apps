import type { ParaId } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    bestNumber?: BN;
    className?: string;
    id: ParaId;
    isScheduled?: boolean;
    lastBacked?: [string, string, BN];
    lastInclusion?: [string, string, BN];
}
declare function Parachain({ bestNumber, className, id, isScheduled, lastBacked, lastInclusion }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Parachain>;
export default _default;
