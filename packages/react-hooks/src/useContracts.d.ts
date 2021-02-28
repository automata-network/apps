interface UseContracts {
    allContracts: string[];
    hasContracts: boolean;
    isContract: (address: string) => boolean;
}
export declare function useContracts(): UseContracts;
export {};
