import type { TxCallback } from '@polkadot/react-components/Status/types';
import type { EthereumAddress, StatementKind } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    accountId: string;
    className?: string;
    ethereumAddress: EthereumAddress | null;
    ethereumSignature: string | null;
    isOldClaimProcess: boolean;
    onSuccess?: TxCallback;
    statementKind?: StatementKind;
}
declare function Claim({ accountId, className, ethereumAddress, ethereumSignature, isOldClaimProcess, onSuccess, statementKind }: Props): React.ReactElement<Props> | null;
export declare const ClaimStyles = "\nfont-size: 1.15rem;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nmin-height: 12rem;\nalign-items: center;\nmargin: 0 1rem;\n\nh3 {\n  font-family: monospace;\n  font-size: 1.5rem;\n  max-width: 100%;\n  margin: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nh2 {\n  margin: 0.5rem 0 2rem;\n  font-family: monospace;\n  font-size: 2.5rem;\n  font-weight: 400;\n}\n";
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Claim, any, {}, never>>;
export default _default;
