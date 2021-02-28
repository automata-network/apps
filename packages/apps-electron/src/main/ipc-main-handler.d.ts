export declare type IpcMainHandler = {
    [channel: string]: (...args: any[]) => unknown;
};
