import type { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
interface Props {
    className?: string;
    color?: 'gray' | 'green' | 'normal' | 'orange' | 'red' | 'transparent' | 'white';
    icon: IconName;
    isSpinning?: boolean;
    onClick?: () => void;
    size?: '1x' | '2x';
    tooltip?: string;
}
declare function Icon({ className, color, icon, isSpinning, onClick, size, tooltip }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Icon, any, {}, never>>;
export default _default;
