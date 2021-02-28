import React from 'react';
declare type Mode = 'account' | 'address' | 'contract' | 'code';
interface Props {
    address?: string;
    children?: React.ReactNode;
    name?: string;
    mode?: Mode;
    onClose: () => void;
    onForget: () => void;
}
declare function Forget(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Forget>;
export default _default;
