import type { CodeStored } from '../types';
import React from 'react';
interface Props {
    buttons?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    code: CodeStored;
    isInline?: boolean;
    withTags?: boolean;
}
declare function CodeRow({ buttons, children, className, code: { json }, isInline, withTags }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof CodeRow, any, {}, never>>;
export default _default;
