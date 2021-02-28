import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
interface Props {
    value: HeaderExtended;
}
declare function BlockHeader({ value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof BlockHeader>;
export default _default;
