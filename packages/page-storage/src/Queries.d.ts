import type { QueryTypes } from './types';
import React from 'react';
interface Props {
    onRemove: (id: number) => void;
    value?: QueryTypes[];
}
declare function Queries({ onRemove, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Queries>;
export default _default;
