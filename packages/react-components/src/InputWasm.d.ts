import type { InputFilePropsBase } from './InputFile';
import React from 'react';
interface Props extends InputFilePropsBase {
    onChange: (contents: Uint8Array, isValid: boolean, name?: string) => void;
}
declare function InputWasm({ onChange, ...props }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputWasm>;
export default _default;
