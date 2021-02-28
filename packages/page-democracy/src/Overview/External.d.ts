import type { DeriveProposalExternal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    value: DeriveProposalExternal;
}
declare function External({ className, value: { image, imageHash, threshold } }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof External>;
export default _default;
