import type { CallResult } from './types';
import React from 'react';
interface Props {
    className?: string;
    onClear?: () => void;
    outcome: CallResult;
}
declare function Outcome({ className, onClear, outcome: { from, message, output, params, result, when } }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Outcome, any, {}, never>>;
export default _default;
