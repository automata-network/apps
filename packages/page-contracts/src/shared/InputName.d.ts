import React from 'react';
interface Props {
    className?: string;
    isBusy?: boolean;
    isContract?: boolean;
    isError?: boolean;
    isDisabled?: boolean;
    onChange: (_: string) => void;
    onEnter?: () => void;
    value?: string;
}
declare function InputName({ className, isBusy, isContract, isError, onChange, onEnter, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputName>;
export default _default;
