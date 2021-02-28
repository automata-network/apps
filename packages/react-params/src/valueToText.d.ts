import type { Codec } from '@polkadot/types/types';
import React from 'react';
export default function valueToText(type: string, value: Codec | undefined | null, swallowError?: boolean, contentShorten?: boolean): React.ReactNode;
