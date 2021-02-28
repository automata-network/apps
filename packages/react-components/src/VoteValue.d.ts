import BN from 'bn.js';
import React from 'react';
interface Props {
    accountId?: string | null;
    autoFocus?: boolean;
    isCouncil?: boolean;
    onChange: (value: BN) => void;
}
declare function VoteValue({ accountId, autoFocus, isCouncil, onChange }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof VoteValue>;
export default _default;
