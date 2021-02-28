import type { DeriveStakingAccount } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    controllerId: string | null;
    onClose: () => void;
    stakingInfo?: DeriveStakingAccount;
    stashId: string;
}
declare function BondExtra({ controllerId, onClose, stakingInfo, stashId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BondExtra>;
export default _default;
