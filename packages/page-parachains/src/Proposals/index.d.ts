import type { Proposals } from '../types';
import React from 'react';
interface Props {
    className?: string;
    proposals?: Proposals;
}
declare function ProposalsTab({ className, proposals }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ProposalsTab>;
export default _default;
