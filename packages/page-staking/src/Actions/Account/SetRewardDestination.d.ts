import type { RewardDestination } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    defaultDestination?: RewardDestination;
    controllerId: string;
    onClose: () => void;
    stashId: string;
}
declare function SetRewardDestination({ controllerId, defaultDestination, onClose, stashId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SetRewardDestination>;
export default _default;
