import type { DeriveElectionsInfo } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    electionsInfo?: DeriveElectionsInfo;
}
declare function Vote({ electionsInfo }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Vote>;
export default _default;
