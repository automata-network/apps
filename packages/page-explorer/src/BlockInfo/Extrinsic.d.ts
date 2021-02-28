import type { KeyedEvent } from '@polkadot/react-query/types';
import type { BlockNumber, Extrinsic } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    blockNumber?: BlockNumber;
    className?: string;
    events?: KeyedEvent[];
    index: number;
    value: Extrinsic;
}
declare function ExtrinsicDisplay({ blockNumber, className, events, index, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ExtrinsicDisplay, any, {}, never>>;
export default _default;
