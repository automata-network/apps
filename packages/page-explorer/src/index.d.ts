import type { KeyedEvent } from '@polkadot/react-query/types';
import React from 'react';
interface Props {
    basePath: string;
    className?: string;
    newEvents?: KeyedEvent[];
}
declare function ExplorerApp({ basePath, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ExplorerApp>;
export default _default;
