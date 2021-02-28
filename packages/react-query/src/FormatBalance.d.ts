import type { Compact } from '@polkadot/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    formatIndex?: number;
    isShort?: boolean;
    label?: React.ReactNode;
    labelPost?: string;
    value?: Compact<any> | BN | string | null | 'all';
    valueFormatted?: string;
    withCurrency?: boolean;
    withSi?: boolean;
}
declare function FormatBalance({ children, className, formatIndex, isShort, label, labelPost, value, valueFormatted, withCurrency, withSi }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof FormatBalance, any, {}, never>>;
export default _default;
