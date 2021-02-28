import React from 'react';
interface Props {
    button?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    offset?: number | string;
    onClose: () => void;
    position: 'left' | 'right';
}
declare function Sidebar({ button, children, className, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Sidebar, any, {}, never>>;
export default _default;
