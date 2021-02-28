interface UseAddresses {
    allAddresses: string[];
    hasAddresses: boolean;
    isAddress: (address: string) => boolean;
}
export declare function useAddresses(): UseAddresses;
export {};
