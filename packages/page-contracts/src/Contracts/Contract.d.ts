import type { ContractCallOutcome } from '@polkadot/api-contract/types';
import type { ContractLink } from './types';
import React from 'react';
import { ContractPromise } from '@polkadot/api-contract';
interface Props {
    className?: string;
    contract: ContractPromise;
    index: number;
    links?: ContractLink[];
    onCall: (contractIndex: number, messaeIndex: number, resultCb: (messageIndex: number, result?: ContractCallOutcome) => void) => void;
}
declare function Contract({ className, contract, index, links, onCall }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Contract>;
export default _default;
