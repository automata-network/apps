import type { SubmittableExtrinsic } from '@polkadot/api/promise/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    accountId?: string | null;
    className?: string;
    extrinsic?: SubmittableExtrinsic | null;
    isSendable: boolean;
    onChange?: (hasAvailable: boolean) => void;
    tip?: BN;
}
declare function PaymentInfo({ accountId, className, extrinsic }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof PaymentInfo>;
export default _default;
