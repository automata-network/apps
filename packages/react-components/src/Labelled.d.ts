import React from 'react';
interface Props {
    className?: string;
    help?: React.ReactNode;
    isHidden?: boolean;
    isFull?: boolean;
    isOuter?: boolean;
    isSmall?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    children: React.ReactNode;
    withEllipsis?: boolean;
    withLabel?: boolean;
}
declare function Labelled({ className, children, help, isFull, isHidden, isOuter, isSmall, label, labelExtra, withEllipsis, withLabel }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Labelled, any, {}, never>>;
export default _default;
