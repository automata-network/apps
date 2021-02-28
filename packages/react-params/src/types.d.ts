/// <reference types="react" />
import type { Registry, TypeDef } from '@polkadot/types/types';
export declare type RawParamValue = unknown | undefined;
export declare type RawParamValueArray = (RawParamValue | RawParamValue[])[];
export declare type RawParamValues = RawParamValue | RawParamValueArray;
export interface RawParam {
    isValid: boolean;
    value: RawParamValues;
}
export interface RawParamOnChangeValue {
    isValid: boolean;
    value: RawParamValues;
}
export declare type RawParamOnChange = (value: RawParamOnChangeValue) => void;
export declare type RawParamOnEnter = () => void;
export declare type RawParamOnEscape = () => void;
export declare type RawParams = RawParam[];
export interface Props {
    className?: string;
    defaultValue: RawParam;
    isDisabled?: boolean;
    isError?: boolean;
    isInOption?: boolean;
    isReadOnly?: boolean;
    isOptional?: boolean;
    label?: React.ReactNode;
    name?: string;
    onChange?: RawParamOnChange;
    onEnter?: RawParamOnEnter;
    onEscape?: RawParamOnEscape;
    overrides?: ComponentMap;
    registry: Registry;
    type: TypeDef & {
        withOptionActive?: boolean;
    };
    withLabel?: boolean;
}
export declare type Size = 'full' | 'large' | 'medium' | 'small';
export declare type ComponentMap = Record<string, React.ComponentType<Props>>;
export interface ParamDef {
    length?: number;
    name?: string;
    type: TypeDef;
}
