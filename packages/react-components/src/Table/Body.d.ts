import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    empty?: React.ReactNode | false;
    emptySpinner?: React.ReactNode;
}
declare function Body({ children, className, empty, emptySpinner }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Body, any, {}, never>>;
export default _default;
