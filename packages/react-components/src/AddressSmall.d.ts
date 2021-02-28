import type { AccountId, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    defaultName?: string;
    onClickName?: () => void;
    overrideName?: React.ReactNode;
    withSidebar?: boolean;
    toggle?: unknown;
    value?: string | Address | AccountId | null | Uint8Array;
}
declare function AddressSmall({ children, className, defaultName, onClickName, overrideName, toggle, value, withSidebar }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AddressSmall, any, {}, never>>;
export default _default;
