import type { I18nProps } from '@polkadot/react-components/types';
import type { Registry } from '@polkadot/types/types';
import type { ComponentMap, ParamDef, RawParams } from './types';
import React from 'react';
import Holder from './Holder';
interface Props extends I18nProps {
    children?: React.ReactNode;
    isDisabled?: boolean;
    onChange?: (value: RawParams) => void;
    onEnter?: () => void;
    onError?: () => void;
    onEscape?: () => void;
    overrides?: ComponentMap;
    params: ParamDef[];
    registry?: Registry;
    values?: RawParams | null;
    withBorder?: boolean;
}
export { Holder };
declare const _default: React.ComponentType<Pick<Pick<Props, "isDisabled" | "className" | "style" | "children" | "values" | "onChange" | "onError" | "onEnter" | "onEscape" | "t" | "params" | "withBorder" | "registry" | "overrides" | "tReady">, "isDisabled" | "className" | "style" | "children" | "values" | "onChange" | "onError" | "onEnter" | "onEscape" | "params" | "withBorder" | "registry" | "overrides"> & import("react-i18next/*").WithTranslationProps>;
export default _default;
