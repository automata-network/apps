import type { Info } from './types';
import React from 'react';
interface Props {
    nextRefresh: number;
    info: Info;
}
declare function Summary({ info: { extrinsics, health, peers }, nextRefresh }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
