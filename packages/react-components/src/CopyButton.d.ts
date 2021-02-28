import type { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    icon?: IconName;
    label?: React.ReactNode;
    type?: string;
    isMnemonic?: boolean;
    value: string;
}
declare function CopyButton({ children, className, icon, label, type, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof CopyButton, any, {}, never>>;
export default _default;
