import React from 'react';
interface Props {
    className?: string;
    address: string;
    onClose: () => void;
}
declare function ChangePass({ address, className, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ChangePass>;
export default _default;
