import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
import { RowProps } from './Row';
export interface Props extends RowProps {
    isContract?: boolean;
    isValid?: boolean;
    fullLength?: boolean;
    label?: string;
    noDefaultNameOpacity?: boolean;
    overlay?: React.ReactNode;
    value: AccountId | AccountIndex | Address | string;
    withSidebar?: boolean;
    withTags?: boolean;
}
declare const DEFAULT_ADDR: string;
declare function AddressRow({ buttons, children, className, defaultName, fullLength, isContract, isDisabled, isEditableName, isInline, isValid: propsIsValid, overlay, value, withTags }: Props): React.ReactElement<Props> | null;
export { DEFAULT_ADDR, AddressRow };
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AddressRow, any, {}, never>>;
export default _default;
