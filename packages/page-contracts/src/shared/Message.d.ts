import type { AbiConstructor, AbiMessage, ContractCallOutcome } from '@polkadot/api-contract/types';
import React from 'react';
export interface Props {
    className?: string;
    index: number;
    lastResult?: ContractCallOutcome;
    message: AbiConstructor | AbiMessage;
    onSelect?: (index: number) => void;
}
declare function Message({ className, index, lastResult, message, onSelect }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Message, any, {}, never>>;
export default _default;
