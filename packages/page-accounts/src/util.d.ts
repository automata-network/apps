import type { SortedAccount } from './types';
import React from 'react';
export declare function createMenuGroup(items: (React.ReactNode | false | undefined | null)[]): React.ReactNode | null;
export declare function sortAccounts(addresses: string[], favorites: string[]): SortedAccount[];
