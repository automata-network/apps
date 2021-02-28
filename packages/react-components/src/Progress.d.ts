import type { UInt } from '@polkadot/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    size?: 'normal' | 'small';
    total?: UInt | BN | number | null;
    value?: UInt | BN | number | null;
}
declare function Progress({ className, isDisabled, size, total, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Progress, any, {}, never>>;
export default _default;
