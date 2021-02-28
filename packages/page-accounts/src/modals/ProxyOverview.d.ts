import type { ProxyDefinition } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    onClose: () => void;
    previousProxy?: [ProxyDefinition[], BN];
    proxiedAccount: string;
}
declare function ProxyOverview({ className, onClose, previousProxy: [existing], proxiedAccount }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ProxyOverview, any, {}, never>>;
export default _default;
