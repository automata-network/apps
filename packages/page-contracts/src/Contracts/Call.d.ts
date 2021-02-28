import type { ContractCallOutcome } from '@polkadot/api-contract/types';
import React from 'react';
import { ContractPromise } from '@polkadot/api-contract';
interface Props {
    className?: string;
    contract: ContractPromise;
    messageIndex: number;
    onCallResult?: (messageIndex: number, result?: ContractCallOutcome | void) => void;
    onChangeMessage: (messageIndex: number) => void;
    onClose: () => void;
}
declare function Call({ className, contract, messageIndex, onCallResult, onChangeMessage, onClose }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Call, any, {}, never>>;
export default _default;
