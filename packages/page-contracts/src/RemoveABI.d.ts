import type { CodeStored } from './types';
import React from 'react';
interface Props {
    code: CodeStored;
    onClose: () => void;
    onRemove: () => void;
}
declare function RemoveABI({ code, onClose, onRemove }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof RemoveABI>;
export default _default;
