import type { AccountId, Balance } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    balance?: Balance;
    voters?: AccountId[];
}
declare function Voters({ balance, voters }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Voters>;
export default _default;
