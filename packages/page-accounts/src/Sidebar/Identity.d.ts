import type { AddressIdentity } from '@polkadot/react-hooks/types';
import React from 'react';
interface Props {
    address: string;
    identity?: AddressIdentity;
}
declare function Identity({ address, identity }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Identity>;
export default _default;
