import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import type { KeyringItemType } from '@polkadot/ui-keyring/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    balance?: BN | BN[];
    bonded?: BN | BN[];
    children?: React.ReactNode;
    className?: string;
    iconInfo?: React.ReactNode;
    isHighlight?: boolean;
    isPadded?: boolean;
    isShort?: boolean;
    label?: React.ReactNode;
    labelBalance?: React.ReactNode;
    summary?: React.ReactNode;
    type?: KeyringItemType;
    value?: AccountId | AccountIndex | Address | string | null | Uint8Array;
    withAddress?: boolean;
    withBalance?: boolean;
    withBonded?: boolean;
    withLockedVote?: boolean;
    withSidebar?: boolean;
    withName?: boolean;
    withShrink?: boolean;
}
declare function AddressMini({ balance, bonded, children, className, iconInfo, isHighlight, isPadded, label, labelBalance, summary, value, withAddress, withBalance, withBonded, withLockedVote, withName, withShrink, withSidebar }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AddressMini, any, {}, never>>;
export default _default;
