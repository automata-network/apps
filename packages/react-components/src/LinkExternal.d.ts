import type { LinkTypes } from '@polkadot/apps-config/links/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    data: BN | number | string;
    hash?: string;
    isLogo?: boolean;
    isSmall?: boolean;
    type: LinkTypes;
}
declare function LinkExternal({ className, data, hash, isLogo, isSmall, type }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof LinkExternal, any, {}, never>>;
export default _default;
