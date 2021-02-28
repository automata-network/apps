import type { CallOptions, CallParam, CallParams } from './types';
declare type TrackFnResult = Promise<unknown>;
interface TrackFn {
    (...params: CallParam[]): TrackFnResult;
    meta?: {
        type: {
            isDoubleMap: boolean;
        };
    };
}
export interface Tracker {
    isActive: boolean;
    serialized: string | null;
    subscriber: TrackFnResult | null;
}
interface TrackerRef {
    current: Tracker;
}
export declare function transformIdentity<T>(value: unknown): T;
export declare function unsubscribe(tracker: TrackerRef): void;
export declare function useCall<T>(fn: TrackFn | undefined | null | false, params?: CallParams, options?: CallOptions<T>): T | undefined;
export {};
