import type { Codec } from '@polkadot/types/types';
import React from 'react';
interface Props {
    curator: Codec;
    isFromProposal: boolean;
}
declare function Curator({ curator, isFromProposal }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Curator>;
export default _default;
