/// <reference types="react" />
export interface DropdownOption {
    className?: string;
    key?: string;
    text: React.ReactNode;
    value: string;
}
export declare type DropdownOptions = DropdownOption[];
