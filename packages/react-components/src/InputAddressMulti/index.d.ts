import React from 'react';
interface Props {
    available: string[];
    availableLabel: React.ReactNode;
    className?: string;
    defaultValue?: string[];
    help: React.ReactNode;
    maxCount: number;
    onChange: (values: string[]) => void;
    valueLabel: React.ReactNode;
}
declare function InputAddressMulti({ available, availableLabel, className, defaultValue, maxCount, onChange, valueLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InputAddressMulti, any, {}, never>>;
export default _default;
