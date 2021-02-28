import type { BondInfo } from './types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    isNominating?: boolean;
    minNomination?: BN;
    onChange: (info: BondInfo) => void;
}
declare function Bond({ className, isNominating, minNomination, onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Bond>;
export default _default;
