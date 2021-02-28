import type { Hash } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    isImminent?: boolean;
    imageHash?: Hash;
    onClose: () => void;
}
declare function PreImage({ className, imageHash, isImminent, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof PreImage, any, {}, never>>;
export default _default;
