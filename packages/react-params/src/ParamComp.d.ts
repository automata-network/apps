import type { Registry, TypeDef } from '@polkadot/types/types';
import type { ComponentMap, RawParam, RawParamOnChangeValue, RawParams } from './types';
import React from 'react';
interface Props {
    defaultValue: RawParam;
    index: number;
    isDisabled?: boolean;
    name?: string;
    onChange: (index: number, value: RawParamOnChangeValue) => void;
    onEnter?: () => void;
    onEscape?: () => void;
    overrides?: ComponentMap;
    registry: Registry;
    type: TypeDef;
    values?: RawParams | null;
}
declare function ParamComp({ defaultValue, index, isDisabled, name, onChange, onEnter, onEscape, overrides, registry, type }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ParamComp>;
export default _default;
