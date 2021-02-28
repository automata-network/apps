import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    defaultName?: string;
    label?: React.ReactNode;
    onClick?: () => void;
    override?: React.ReactNode;
    toggle?: boolean;
    value: AccountId | AccountIndex | Address | string | Uint8Array | null | undefined;
    withSidebar?: boolean;
}
export declare function getParentAccount(value: string): string | undefined;
declare function AccountName({ children, className, defaultName, label, onClick, override, toggle, value, withSidebar }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AccountName, any, {}, never>>;
export default _default;
