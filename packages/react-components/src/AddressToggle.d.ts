import React from 'react';
interface Props {
    address: string;
    className?: string;
    isHidden?: boolean;
    filter?: string;
    noToggle?: boolean;
    onChange?: (isChecked: boolean) => void;
    value?: boolean;
}
declare function AddressToggle({ address, className, filter, isHidden, noToggle, onChange, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof AddressToggle, any, {}, never>>;
export default _default;
