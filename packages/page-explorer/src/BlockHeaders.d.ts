import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
interface Props {
    headers: HeaderExtended[];
}
declare function BlockHeaders({ headers }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BlockHeaders>;
export default _default;
