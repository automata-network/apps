/// <reference types="react" />
import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { Balance, BlockNumber, BountyIndex, BountyStatus } from '@polkadot/types/interfaces';
import BN from 'bn.js';
interface Props {
    bestNumber: BlockNumber;
    description: string;
    fee?: BN;
    index: BountyIndex;
    proposals?: DeriveCollectiveProposal[];
    status: BountyStatus;
    value: Balance;
}
export declare function BountyActions({ bestNumber, description, fee, index, proposals, status, value }: Props): JSX.Element;
export {};
