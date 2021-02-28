import React from 'react';
interface Props {
    className?: string;
    footer?: React.ReactNode;
    isEmpty: boolean;
}
declare function Foot({ className, footer, isEmpty }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Foot, any, {}, never>>;
export default _default;
