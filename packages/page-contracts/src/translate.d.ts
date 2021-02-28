/// <reference types="react" />
import type { UseTranslationResponse } from 'react-i18next';
export declare function useTranslation(): UseTranslationResponse<'app-contracts'>;
declare const _default: <C extends import("react").ComponentType<import("react").ComponentProps<C> & import("react-i18next/*").WithTranslationProps>, ResolvedProps = JSX.LibraryManagedAttributes<C, Pick<import("react").ComponentProps<C>, Exclude<keyof import("react").ComponentProps<C>, "i18n" | "useSuspense">>>>(component: C) => import("react").ComponentType<Pick<ResolvedProps, Exclude<keyof ResolvedProps, "t" | "i18n" | "tReady">> & import("react-i18next/*").WithTranslationProps>;
export default _default;
