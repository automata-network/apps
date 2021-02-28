import type { KeyedEvent } from '@polkadot/react-query/types';
import type { BlockNumber, Extrinsic } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    blockNumber?: BlockNumber;
    className?: string;
    events?: KeyedEvent[];
    label?: React.ReactNode;
    value?: Extrinsic[] | null;
}
declare function Extrinsics({ blockNumber, className, events, label, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Extrinsics>;
export default _default;
