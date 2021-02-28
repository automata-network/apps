import type { DeriveSociety } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    info?: DeriveSociety;
}
declare function Members({ className, info }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Members>;
export default _default;
