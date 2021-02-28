interface UseAccounts {
    allAccounts: string[];
    hasAccounts: boolean;
    isAccount: (address: string) => boolean;
}
export declare function useAccounts(): UseAccounts;
export {};
