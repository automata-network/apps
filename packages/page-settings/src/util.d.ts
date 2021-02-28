import type { Option } from '@polkadot/apps-config/settings/types';
import type { SettingsStruct } from '@polkadot/ui-settings/types';
import React from 'react';
export declare function createOption({ info, isHeader, text, value }: Option, overrides?: string[], override?: string): Option | React.ReactNode;
export declare function createIdenticon({ info, text, value }: Option, overrides?: string[], override?: string): Option;
export declare function save(state: SettingsStruct): void;
export declare function saveAndReload(state: SettingsStruct): void;
