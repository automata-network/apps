import type { QueueTx } from '@polkadot/react-components/Status/types';
import React from 'react';
interface Props {
    queue: QueueTx[];
}
declare function Results({ queue }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Results>;
export default _default;
