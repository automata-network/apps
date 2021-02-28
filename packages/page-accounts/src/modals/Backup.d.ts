import React from 'react';
interface Props {
    onClose: () => void;
    address: string;
}
declare function Backup({ address, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Backup>;
export default _default;
