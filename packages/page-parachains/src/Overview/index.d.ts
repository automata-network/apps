import type { Proposals } from '../types';
import React from 'react';
interface Props {
    className?: string;
    proposals?: Proposals;
}
declare function Overview({ className, proposals }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
