import type { TxCallback } from '@polkadot/react-components/Status/types';
import type { EthereumAddress, StatementKind } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    accountId: string;
    className?: string;
    ethereumAddress: EthereumAddress | null;
    onSuccess?: TxCallback;
    statementKind?: StatementKind;
    systemChain: string;
}
declare function Attest({ accountId, className, ethereumAddress, onSuccess, statementKind, systemChain }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Attest, any, {}, never>>;
export default _default;
