import type { ValidateInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    onChange: (info: ValidateInfo) => void;
    stashId: string;
    withSenders?: boolean;
}
declare function Validate({ className, controllerId, onChange, stashId, withSenders }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Validate>;
export default _default;
