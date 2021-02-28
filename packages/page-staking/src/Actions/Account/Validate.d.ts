import React from 'react';
interface Props {
    controllerId: string;
    onClose: () => void;
    stashId: string;
}
declare function Validate({ controllerId, onClose, stashId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Validate>;
export default _default;
