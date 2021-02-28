import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    label?: string;
    onClick: () => void;
    tabIndex?: number;
}
declare function ButtonCancel({ className, isDisabled, label, onClick, tabIndex }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ButtonCancel>;
export default _default;
