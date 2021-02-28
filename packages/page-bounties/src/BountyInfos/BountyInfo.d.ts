import React from 'react';
interface Props {
    className: '';
    description: string;
    type?: 'info' | 'warning';
}
declare function BountyInfo({ className, description, type }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof BountyInfo, any, {}, never>>;
export default _default;
