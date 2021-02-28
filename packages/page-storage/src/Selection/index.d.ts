import type { QueryTypes } from '../types';
import React from 'react';
interface Props {
    basePath: string;
    onAdd: (query: QueryTypes) => void;
}
declare function Selection({ basePath, onAdd }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Selection>;
export default _default;
