import type { StakerState } from '@polkadot/react-hooks/types';
import React from 'react';
interface Props {
    className?: string;
    isInElection?: boolean;
    ownValidators: StakerState[];
}
declare function Payouts({ className, isInElection, ownValidators }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Payouts, any, {}, never>>;
export default _default;
