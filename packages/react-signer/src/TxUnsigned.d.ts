import type { QueueTx } from '@polkadot/react-components/Status/types';
import React from 'react';
interface Props {
    className?: string;
    currentItem: QueueTx;
}
declare function TxUnsigned({ className, currentItem }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof TxUnsigned>;
export default _default;
