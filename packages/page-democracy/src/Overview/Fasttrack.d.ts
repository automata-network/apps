import type { Hash, VoteThreshold } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    imageHash: Hash;
    threshold: VoteThreshold;
}
declare function Fasttrack({ imageHash, threshold }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Fasttrack>;
export default _default;
