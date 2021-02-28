import type { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
interface Props {
    help: React.ReactNode;
    icon?: IconName;
    className?: string;
}
declare function LabelHelp({ className, help, icon }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof LabelHelp, any, {}, never>>;
export default _default;
