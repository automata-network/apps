/// <reference types="node" />
import type { EcdsaSignature, EthereumAddress, StatementKind } from '@polkadot/types/interfaces';
interface RecoveredSignature {
    error: Error | null;
    ethereumAddress: EthereumAddress | null;
    signature: EcdsaSignature | null;
}
interface SignatureParts {
    recovery: number;
    signature: Buffer;
}
export declare function addrToChecksum(_address: string): string;
export declare function publicToAddr(publicKey: Uint8Array): string;
export declare function hashMessage(message: string): Buffer;
export declare function sigToParts(_signature: string): SignatureParts;
export declare function recoverAddress(message: string, { recovery, signature }: SignatureParts): string;
export declare function recoverFromJSON(signatureJson: string | null): RecoveredSignature;
export interface Statement {
    sentence: string;
    url: string;
}
export declare function getStatement(network: string, kind?: StatementKind | null): Statement | undefined;
export {};
