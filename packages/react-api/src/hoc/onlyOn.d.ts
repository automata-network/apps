import { ComponentType } from 'react';
export declare const onlyOnWeb: <T extends ComponentType<any>>(component: T) => T | (() => null);
export declare const onlyOnApp: <T extends ComponentType<any>>(component: T) => T | (() => null);
