import type { KeyedEvent } from '@polkadot/react-query/types';
import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
interface Props {
    events: KeyedEvent[];
    headers: HeaderExtended[];
}
declare function Main({ events, headers }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Main>;
export default _default;
