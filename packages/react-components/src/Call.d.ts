import type { IExtrinsic, IMethod } from '@polkadot/types/types';
import BN from 'bn.js';
import React from 'react';
export interface Props {
    children?: React.ReactNode;
    className?: string;
    labelHash?: React.ReactNode;
    labelSignature?: React.ReactNode;
    mortality?: string;
    onError?: () => void;
    value: IExtrinsic | IMethod;
    withBorder?: boolean;
    withHash?: boolean;
    withSignature?: boolean;
    tip?: BN;
}
declare function Call({ children, className, labelHash, labelSignature, mortality, onError, tip, value, withBorder, withHash, withSignature }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Call, any, {}, never>>;
export default _default;
