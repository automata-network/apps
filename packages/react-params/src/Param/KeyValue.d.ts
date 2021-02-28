import type { Props } from '../types';
import React from 'react';
interface StateParam {
    isValid: boolean;
    u8a: Uint8Array;
}
export declare function createParam(hex: string | String, length?: number): StateParam;
declare function KeyValue({ className, isDisabled, label, onChange, onEnter, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof KeyValue>;
export default _default;
