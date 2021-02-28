import type { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
interface Props {
    className?: string;
    color: 'blue' | 'counter' | 'counterInvert' | 'gray' | 'green' | 'highlight' | 'normal' | 'orange' | 'purple' | 'red' | 'transparent';
    hover?: React.ReactNode;
    icon?: IconName;
    info?: React.ReactNode;
    isSmall?: boolean;
    onClick?: () => void;
}
declare function Badge({ className, color, hover, icon, info, isSmall, onClick }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Badge, any, {}, never>>;
export default _default;
