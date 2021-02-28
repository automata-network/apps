import type { DeriveSociety } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    info?: DeriveSociety;
    isMember: boolean;
    ownMembers: string[];
}
declare function Defender({ className, info, isMember, ownMembers }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Defender>;
export default _default;
