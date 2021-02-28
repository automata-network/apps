import React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    isError?: boolean;
    isSuccess?: boolean;
    withBottomMargin?: boolean;
}
declare function Card({ children, className, isError, isSuccess, withBottomMargin }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Card, any, {}, never>>;
export default _default;
