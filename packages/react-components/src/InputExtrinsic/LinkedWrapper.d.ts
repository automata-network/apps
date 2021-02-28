import React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    help?: React.ReactNode;
    label: React.ReactNode;
    withLabel?: boolean;
}
declare function LinkedWrapper({ children, className, help, label, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof LinkedWrapper, any, {}, never>>;
export default _default;
