import type { SessionInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    onChange: (info: SessionInfo) => void;
    stashId: string;
    withSenders?: boolean;
}
declare function SessionKey({ className, controllerId, onChange, stashId, withSenders }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SessionKey>;
export default _default;
