/// <reference types="react" />
import type { SubmittableExtrinsicFunction } from '@polkadot/api/promise/types';
import type { InjectedExtension } from '@polkadot/extension-inject/types';
import { ApiPromise } from '@polkadot/api/promise';
export declare type OmitProps<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type SubtractProps<T, K> = OmitProps<T, keyof K>;
export interface BareProps {
    className?: string;
}
export interface ApiState {
    apiDefaultTx: SubmittableExtrinsicFunction;
    apiDefaultTxSudo: SubmittableExtrinsicFunction;
    hasInjectedAccounts: boolean;
    isApiReady: boolean;
    isDevelopment: boolean;
    isEthereum: boolean;
    systemChain: string;
    systemName: string;
    systemVersion: string;
}
export interface ApiProps extends ApiState {
    api: ApiPromise;
    apiError: string | null;
    extensions?: InjectedExtension[];
    isApiConnected: boolean;
    isApiInitialized: boolean;
    isWaitingInjected: boolean;
}
export interface OnChangeCbObs {
    next: (value?: any) => any;
}
export declare type OnChangeCbFn = (value?: any) => any;
export declare type OnChangeCb = OnChangeCbObs | OnChangeCbFn;
export interface ChangeProps {
    callOnResult?: OnChangeCb;
}
export interface CallState {
    callResult?: unknown;
    callUpdated?: boolean;
    callUpdatedAt?: number;
}
export declare type CallProps = ApiProps & CallState;
export interface BaseProps<T> extends BareProps, CallProps, ChangeProps {
    children?: React.ReactNode;
    label?: string;
    render?: (value?: T) => React.ReactNode;
}
export declare type Formatter = (value?: any) => string;
export declare type Environment = 'web' | 'app';
