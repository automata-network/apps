import type { AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    members?: string[];
    prime?: AccountId | null;
}
declare function Members({ className, members, prime }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Members>;
export default _default;
