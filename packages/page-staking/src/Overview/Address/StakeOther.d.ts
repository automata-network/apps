import type { NominatorValue } from './types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    stakeOther?: BN;
    nominators: NominatorValue[];
}
declare function StakeOther({ nominators, stakeOther }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof StakeOther>;
export default _default;
