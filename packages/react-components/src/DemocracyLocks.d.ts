import type { DeriveDemocracyLock } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    value?: DeriveDemocracyLock[];
}
declare function DemocracyLocks({ className, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof DemocracyLocks, any, {}, never>>;
export default _default;
