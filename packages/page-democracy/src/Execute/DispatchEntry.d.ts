import type { DeriveDispatch } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    value: DeriveDispatch;
}
declare function DispatchEntry({ value: { at, image, imageHash, index } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof DispatchEntry>;
export default _default;
