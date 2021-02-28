export declare type WaitOptions = {
    interval?: number;
    timeout?: number;
};
export declare function waitFor(predicate: () => boolean, { interval, timeout }: WaitOptions): Promise<boolean>;
export declare function waitFor(predicate: () => Promise<boolean>, { interval, timeout }: WaitOptions): Promise<boolean>;
export declare const sleep: (ms: number) => Promise<void>;
