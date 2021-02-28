import React from 'react';
interface Props {
    address: string;
    className?: string;
    onClose: () => void;
}
declare function RecoverSetup({ address, className, onClose }: Props): React.ReactElement;
declare const _default: React.MemoExoticComponent<typeof RecoverSetup>;
export default _default;
