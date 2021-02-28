import React from 'react';
interface Props {
    controllerId: string;
    onClose: () => void;
    stashId: string;
}
declare function SetSessionKey({ controllerId, onClose, stashId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof SetSessionKey>;
export default _default;
