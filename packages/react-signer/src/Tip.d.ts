import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    onChange: (tip: BN) => void;
}
declare function Tip({ className, onChange }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Tip>;
export default _default;
