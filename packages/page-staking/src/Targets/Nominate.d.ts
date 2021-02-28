import type { StakerState } from '@polkadot/react-hooks/types';
import React from 'react';
interface Props {
    className?: string;
    isDisabled: boolean;
    ownNominators?: StakerState[];
    targets: string[];
}
declare function Nominate({ className, isDisabled, ownNominators, targets }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Nominate, any, {}, never>>;
export default _default;
