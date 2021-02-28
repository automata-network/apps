import type { QueueTx } from '@polkadot/react-components/Status/types';
import React from 'react';
interface Props {
    className?: string;
    currentItem: QueueTx;
    requestAddress: string;
}
declare function TxSigned({ className, currentItem, requestAddress }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof TxSigned, any, {}, never>>;
export default _default;
