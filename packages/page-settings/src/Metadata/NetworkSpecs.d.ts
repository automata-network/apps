import type { ChainInfo } from '../types';
import React from 'react';
interface Props {
    chainInfo: ChainInfo | null;
    className?: string;
}
declare function NetworkSpecs({ chainInfo, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof NetworkSpecs, any, {}, never>>;
export default _default;
