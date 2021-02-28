import type { DeriveProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    value: DeriveProposal;
}
declare function Proposal({ className, value: { balance, image, imageHash, index, proposer, seconds } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Proposal, any, {}, never>>;
export default _default;
