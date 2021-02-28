import type { QueueTx } from '@polkadot/react-components/Status/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    currentItem: QueueTx;
    isSendable: boolean;
    onError: () => void;
    tip?: BN;
}
declare function Transaction({ className, currentItem: { accountId, extrinsic, isUnsigned, payload }, isSendable, onError, tip }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Transaction, any, {}, never>>;
export default _default;
