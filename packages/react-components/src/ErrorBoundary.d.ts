import type { I18nProps } from './types';
import React from 'react';
interface Props extends I18nProps {
    children: React.ReactNode;
    doThrow?: boolean;
    error?: Error | null;
    onError?: () => void;
    trigger?: unknown;
}
declare const _default: React.ComponentType<Pick<Pick<Props, "error" | "className" | "style" | "children" | "onError" | "trigger" | "t" | "tReady" | "doThrow">, "error" | "className" | "style" | "children" | "onError" | "trigger" | "doThrow"> & import("react-i18next/*").WithTranslationProps>;
export default _default;
