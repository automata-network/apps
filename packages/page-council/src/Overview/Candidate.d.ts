import type { AccountId, Balance } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    address: AccountId;
    balance?: Balance;
    isPrime?: boolean;
    voters?: AccountId[];
}
declare function Candidate({ address, balance, className, isPrime, voters }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Candidate>;
export default _default;
