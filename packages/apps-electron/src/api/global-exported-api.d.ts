import { ElectronMainApi } from './electron-main-api';
declare global {
    interface Window {
        ElectronMain: ElectronMainApi;
    }
}
export declare const electronMainApi: ElectronMainApi;
