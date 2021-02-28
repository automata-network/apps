import React from 'react';
interface Props {
    address: string;
    className?: string;
    onClose: () => void;
}
declare function RecoverAccount({ address, className, onClose }: Props): React.ReactElement;
declare const _default: React.MemoExoticComponent<typeof RecoverAccount>;
export default _default;
