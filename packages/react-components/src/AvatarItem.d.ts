import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    color?: string;
    icon: React.ReactNode;
    isBig?: boolean;
    title: React.ReactNode;
    subtitle: React.ReactNode;
}
declare function AvatarItem({ children, className, icon, isBig, subtitle, title }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AvatarItem, any, {}, never>>;
export default _default;
