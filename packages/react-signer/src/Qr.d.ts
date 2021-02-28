import React from 'react';
interface SigData {
    signature: string;
}
interface Props {
    address: string;
    className?: string;
    genesisHash: Uint8Array;
    isHashed: boolean;
    isScanning: boolean;
    onSignature: (data: SigData) => void;
    payload: Uint8Array;
}
declare function Qr({ address, className, genesisHash, isHashed, onSignature, payload }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Qr, any, {}, never>>;
export default _default;
