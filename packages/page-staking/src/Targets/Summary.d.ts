import BN from 'bn.js';
import React from 'react';
interface Props {
    avgStaked?: BN;
    lowStaked?: BN;
    minNominated?: BN;
    numNominators?: number;
    numValidators?: number;
    stakedReturn: number;
    totalIssuance?: BN;
    totalStaked?: BN;
}
declare function Summary({ avgStaked, lowStaked, minNominated, stakedReturn, totalIssuance, totalStaked }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
