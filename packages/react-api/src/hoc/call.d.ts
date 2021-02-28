import type { ApiProps } from '../types';
import type { Options } from './types';
import React from 'react';
export default function withCall<P extends ApiProps>(endpoint: string, { at, atProp, callOnResult, fallbacks, isMulti, params, paramName, paramPick, paramValid, propName, skipIf, transform, withIndicator }?: Options): (Inner: React.ComponentType<ApiProps>) => React.ComponentType<any>;
