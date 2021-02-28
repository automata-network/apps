import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    isSmall?: boolean;
}
declare function SummaryBox({ children, className, isSmall }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof SummaryBox, any, {}, never>>;
export default _default;
