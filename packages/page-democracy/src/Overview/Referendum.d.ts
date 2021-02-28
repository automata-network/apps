import type { DeriveReferendumExt } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    value: DeriveReferendumExt;
}
declare function Referendum({ className, value: { allAye, allNay, image, imageHash, index, isPassing, status, voteCountAye, voteCountNay, votedAye, votedNay, votedTotal } }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Referendum, any, {}, never>>;
export default _default;
