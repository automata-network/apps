import type { PeerInfo } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    peers?: PeerInfo[] | null;
}
declare function Peers({ className, peers }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Peers, any, {}, never>>;
export default _default;
