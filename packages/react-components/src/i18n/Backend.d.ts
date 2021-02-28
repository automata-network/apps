declare type Callback = (error: string | null, data: any) => void;
declare type LoadResult = [string | null, Record<string, string> | boolean];
export default class Backend {
    type: string;
    static type: 'backend';
    read(lng: string, _namespace: string, responder: Callback): Promise<void>;
    createLoader(lng: string): Promise<LoadResult>;
}
export {};
