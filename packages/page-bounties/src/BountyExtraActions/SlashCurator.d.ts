import type { AccountId, BountyIndex } from '@polkadot/types/interfaces';
import React from 'react';
import { ValidUnassignCuratorAction } from '../types';
interface Props {
    action: ValidUnassignCuratorAction;
    curatorId: AccountId;
    description: string;
    index: BountyIndex;
    toggleOpen: () => void;
}
declare function SlashCurator({ action, curatorId, description, index, toggleOpen }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof SlashCurator>;
export default _default;
