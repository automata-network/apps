import type { DeriveReferendumExt } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    referendums?: DeriveReferendumExt[];
}
declare function Referendums({ className, referendums }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Referendums>;
export default _default;
