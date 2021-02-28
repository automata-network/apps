import type { PopupProps } from 'semantic-ui-react';
import React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    isOpen?: boolean;
    on?: PopupProps['on'];
    onClose?: () => void;
    position?: PopupProps['position'];
    trigger?: React.ReactNode;
}
declare function Popup({ children, className, isOpen, on, onClose, position, trigger }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Popup>;
export default _default;
