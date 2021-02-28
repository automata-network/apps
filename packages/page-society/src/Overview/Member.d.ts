import type { DeriveSocietyMember } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    isHead?: boolean;
    value: DeriveSocietyMember;
}
declare function Member({ className, isHead, value: { accountId, strikes } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Member>;
export default _default;
