import type { UInt } from '@polkadot/types';
import BN from 'bn.js';
import React from 'react';
interface ProgressProps {
    hideValue?: boolean;
    isPercent?: boolean;
    total?: BN | UInt;
    value?: BN | UInt;
    withTime?: boolean;
}
interface Props {
    children?: React.ReactNode;
    className?: string;
    help?: React.ReactNode;
    label: React.ReactNode;
    progress?: ProgressProps;
}
declare function CardSummary({ children, className, help, label, progress }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof CardSummary, any, {}, never>>;
export default _default;
