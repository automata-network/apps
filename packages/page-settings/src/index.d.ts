import type { AppProps as Props } from '@polkadot/react-components/types';
import React from 'react';
import useCounter from './useCounter';
export { useCounter };
declare function SettingsApp({ basePath, onStatusChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SettingsApp>;
export default _default;
