import React from 'react';
export interface InsetProps {
    className?: string;
    children?: React.ReactNode;
    isCollapsible?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    header?: React.ReactNode;
    href?: string | null;
    withTopMargin?: boolean;
    withBottomMargin?: boolean;
}
declare function Inset({ children, className, header, href, isCollapsible, isError, isSuccess, withBottomMargin, withTopMargin }: InsetProps): React.ReactElement<InsetProps> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Inset, any, {}, never>>;
export default _default;
