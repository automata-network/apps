import type { Log } from './types';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    logs: Log[];
}
declare function Output({ children, className, logs }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Output, any, {}, never>>;
export default _default;
