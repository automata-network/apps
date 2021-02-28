import type { RawParam } from '../types';
import React from 'react';
interface Props {
    asHex?: boolean;
    children?: React.ReactNode;
    className?: string;
    defaultValue: RawParam;
    label?: React.ReactNode;
    withLabel?: boolean;
}
declare function StaticParam({ asHex, children, className, defaultValue, label }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof StaticParam, any, {}, never>>;
export default _default;
