import type { Hash } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    imageHash: Hash;
    isImminent?: boolean;
}
declare function PreImageButton({ imageHash, isImminent }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof PreImageButton>;
export default _default;
