import type { ItemRoute } from './types';
import React from 'react';
interface Props {
    className?: string;
    isToplevel?: boolean;
    route: ItemRoute;
}
declare function Item({ className, isToplevel, route: { Modal, href, icon, name, text, useCounter } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Item, any, {}, never>>;
export default _default;
