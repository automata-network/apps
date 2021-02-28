import type { ChainInfo } from '../types';
import React from 'react';
interface Props {
    chainInfo: ChainInfo | null;
    className?: string;
}
declare function Extensions({ chainInfo, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Extensions>;
export default _default;
