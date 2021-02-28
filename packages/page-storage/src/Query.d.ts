import type { QueryTypes } from './types';
import React from 'react';
interface Props {
    className?: string;
    onRemove: (id: number) => void;
    value: QueryTypes;
}
declare function Query({ className, onRemove, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Query, any, {}, never>>;
export default _default;
