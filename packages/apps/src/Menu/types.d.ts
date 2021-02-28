import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { Routes } from '@polkadot/apps-routing/types';
import React from 'react';
export interface ItemRoute {
    Modal?: React.ComponentType<any>;
    href?: string;
    icon: IconName;
    name: string;
    text: string;
    useCounter?: () => number | string | null;
}
export interface Group {
    name: string;
    routes: Routes;
}
export declare type Groups = Record<string, Group>;
