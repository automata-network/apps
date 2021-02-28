export declare type FormField<T> = [
    T | null,
    boolean,
    (_?: T | null) => void
];
export declare function useFormField<T>(defaultValue: T | null, validate?: (_: T) => boolean): FormField<T>;
