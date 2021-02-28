import { Abi } from '@polkadot/api-contract';
interface AbiState {
    abi: string | null;
    abiName: string | null;
    contractAbi: Abi | null;
    errorText: string | null;
    isAbiError: boolean;
    isAbiValid: boolean;
    isAbiSupplied: boolean;
}
interface UseAbi extends AbiState {
    onChangeAbi: (u8a: Uint8Array, name: string) => void;
    onRemoveAbi: () => void;
}
export default function useAbi(initialValue?: [string | null | undefined, Abi | null | undefined], codeHash?: string | null, isRequired?: boolean): UseAbi;
export {};
