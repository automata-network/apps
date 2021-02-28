import React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    type: 'warning' | 'error';
}
declare function Banner({ children, className, type }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Banner, any, {}, never>>;
export default _default;
