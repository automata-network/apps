import type { DeriveSociety } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    info?: DeriveSociety;
}
declare function Summary({ className, info }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Summary, any, {}, never>>;
export default _default;
