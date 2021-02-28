import React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    type?: 'error' | 'info' | 'warning';
}
declare function InfoForInput({ children, className, type }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InfoForInput, any, {}, never>>;
export default _default;
