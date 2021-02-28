import React from 'react';
interface Props {
    className?: string;
    from: string;
    onClose: () => void;
}
declare function Derive({ className, from, onClose }: Props): React.ReactElement;
declare const _default: React.MemoExoticComponent<typeof Derive>;
export default _default;
