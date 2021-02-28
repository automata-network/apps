import type { Bid } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    index: number;
    value: Bid;
}
declare function BidRow({ index, value: { kind, value, who } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BidRow>;
export default _default;
