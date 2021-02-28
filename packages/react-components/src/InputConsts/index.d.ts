import type { ConstValue, ConstValueBase } from './types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: ConstValueBase;
    help?: React.ReactNode;
    isError?: boolean;
    label: React.ReactNode;
    onChange?: (value: ConstValue) => void;
    withLabel?: boolean;
}
declare function InputConsts({ className, defaultValue, help, label, onChange, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputConsts>;
export default _default;
