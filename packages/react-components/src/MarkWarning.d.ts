import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    content?: React.ReactNode;
}
declare function MarkWarning({ children, className, content }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof MarkWarning, any, {}, never>>;
export default _default;
