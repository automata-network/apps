declare type Flags = Record<string, boolean>;
declare type Setters<T extends Flags> = Record<keyof T, (value: boolean) => void>;
declare type State<T extends Flags> = [T, Setters<T>];
export declare function useSavedFlags<T extends Flags>(storageKey: string, initial: T): State<T>;
export {};
