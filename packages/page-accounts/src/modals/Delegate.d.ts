import type { Conviction } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    onClose: () => void;
    previousAmount?: BN;
    previousConviction?: Conviction;
    previousDelegatedAccount?: string;
    previousDelegatingAccount?: string;
}
declare function Delegate({ onClose, previousAmount, previousConviction, previousDelegatedAccount, previousDelegatingAccount }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Delegate>;
export default _default;
