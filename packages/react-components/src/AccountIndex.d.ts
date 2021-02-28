import type { AccountId, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    defaultValue?: string;
    label?: React.ReactNode;
    value?: string | AccountId | Address | null | Uint8Array;
}
declare function AccountIndex({ children, className, defaultValue, label, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AccountIndex, any, {}, never>>;
export default _default;
