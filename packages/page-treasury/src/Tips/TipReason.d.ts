import type { Hash } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    hash: Hash;
}
declare function TipReason({ hash }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TipReason>;
export default _default;
