import type { ContractCallOutcome } from '@polkadot/api-contract/types';
import React from 'react';
import { Abi, ContractPromise } from '@polkadot/api-contract';
export interface Props {
    className?: string;
    contract?: ContractPromise;
    contractAbi: Abi;
    isLabelled?: boolean;
    isWatching?: boolean;
    onSelect?: (messageIndex: number, resultCb: (messageIndex: number, result?: ContractCallOutcome) => void) => void;
    onSelectConstructor?: (constructorIndex: number) => void;
    withConstructors?: boolean;
    withMessages?: boolean;
    withWasm?: boolean;
}
declare function Messages({ className, contract, contractAbi: { constructors, messages, project: { source } }, isLabelled, isWatching, onSelect, onSelectConstructor, withConstructors, withMessages, withWasm }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Messages, any, {}, never>>;
export default _default;
