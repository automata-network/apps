interface Registrar {
    address: string;
    index: number;
}
interface State {
    isRegistrar: boolean;
    registrars: Registrar[];
    skipQuery?: boolean;
}
export declare function useRegistrars(skipQuery?: boolean): State;
export {};
