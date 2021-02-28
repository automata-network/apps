import type { SortedTargets } from '../../types';
import type { NominateInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    nominating?: string[];
    onChange: (info: NominateInfo) => void;
    stashId: string;
    targets: SortedTargets;
    withSenders?: boolean;
}
declare function Nominate({ className, controllerId, nominating, onChange, stashId, targets: { validatorIds }, withSenders }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Nominate, any, {}, never>>;
export default _default;
