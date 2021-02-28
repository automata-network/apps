import type { TabItem } from './types';
import React from 'react';
interface Props extends TabItem {
    basePath: string;
    className?: string;
    count?: number;
    index: number;
}
declare function Tab({ basePath, className, count, hasParams, index, isExact, isRoot, name, text }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tab, any, {}, never>>;
export default _default;
