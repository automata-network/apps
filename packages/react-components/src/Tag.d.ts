import React from 'react';
interface Props {
    className?: string;
    color?: 'blue' | 'green' | 'grey' | 'orange' | 'pink' | 'red' | 'yellow' | 'theme';
    hover?: React.ReactNode;
    isTag?: boolean;
    label: React.ReactNode;
    size?: 'small' | 'tiny';
}
declare function Tag({ className, color, hover, isTag, label, size }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tag, any, {}, never>>;
export default _default;
