import React from 'react';
interface Props {
    className?: string;
    href?: string;
    icon?: string;
    label?: React.ReactNode;
    rel?: string;
    target?: string;
    onClick: () => void;
}
declare function IconLink({ className, href, icon, label, onClick, rel, target }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof IconLink, any, {}, never>>;
export default _default;
