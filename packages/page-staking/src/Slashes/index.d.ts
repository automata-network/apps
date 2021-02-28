import type { StakerState } from '@polkadot/react-hooks/types';
import type { UnappliedSlash } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    ownStashes?: StakerState[];
    slashes: [BN, UnappliedSlash[]][];
}
declare function Slashes({ ownStashes, slashes }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Slashes>;
export default _default;
