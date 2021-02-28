import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    label: React.ReactNode;
    onChange?: (isChecked: boolean) => void;
    value?: boolean;
}
declare function Checkbox({ className, isDisabled, label, onChange, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Checkbox, any, {}, never>>;
export default _default;
