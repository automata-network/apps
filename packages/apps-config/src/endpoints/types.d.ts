/// <reference types="react" />
export interface EndpointOption {
    dnslink?: string;
    genesisHash?: string;
    isChild?: boolean;
    isDevelopment?: boolean;
    isDisabled?: boolean;
    linked?: EndpointOption[];
    info?: string;
    paraId?: number;
    providers: Record<string, string>;
    text: React.ReactNode;
}
