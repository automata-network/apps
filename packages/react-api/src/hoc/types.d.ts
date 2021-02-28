import type { OnChangeCb } from '../types';
import React from 'react';
export declare type Transform = (value: any, index: number) => any;
export interface DefaultProps {
    callOnResult?: OnChangeCb;
    [index: string]: any;
}
export interface Options {
    at?: Uint8Array | string;
    atProp?: string;
    callOnResult?: OnChangeCb;
    fallbacks?: string[];
    isMulti?: boolean;
    params?: any[];
    paramName?: string;
    paramPick?: (props: any) => any;
    paramValid?: boolean;
    propName?: string;
    skipIf?: (props: any) => boolean;
    transform?: Transform;
    withIndicator?: boolean;
}
export declare type RenderFn = (value?: any) => React.ReactNode;
export declare type StorageTransform = (input: any, index: number) => any | null;
export declare type HOC = (Component: React.ComponentType<any>, defaultProps?: DefaultProps, render?: RenderFn) => React.ComponentType<any>;
export interface ApiMethod {
    name: string;
    section?: string;
}
export declare type ComponentRenderer = (render: RenderFn, defaultProps?: DefaultProps) => React.ComponentType<any>;
export declare type OmitProps<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type SubtractProps<T, K> = OmitProps<T, keyof K>;
