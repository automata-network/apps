import type { LinkOption } from '@polkadot/apps-config/settings/types';
import type { Codec } from '@polkadot/types/types';
import React from 'react';
export declare function sliceHex(value: Codec, max: number): string;
export declare function getChainLink(endpoints: LinkOption[]): React.ReactNode;
