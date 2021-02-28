import type { DeriveProposalImage } from '@polkadot/api-derive/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    deposit?: Balance;
    depositors: AccountId[];
    image?: DeriveProposalImage;
    proposalId: BN | number;
}
declare function Seconding({ deposit, depositors, image, proposalId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Seconding>;
export default _default;
