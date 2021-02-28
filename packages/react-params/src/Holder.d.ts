import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    withBorder?: boolean;
    withPadding?: boolean;
}
declare function Holder({ children, className, withBorder, withPadding }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Holder, any, {}, never>>;
export default _default;
