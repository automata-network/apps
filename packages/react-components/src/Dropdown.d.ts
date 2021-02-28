import React from 'react';
interface Props<Option> {
    allowAdd?: boolean;
    children?: React.ReactNode;
    className?: string;
    defaultValue?: any;
    dropdownClassName?: string;
    help?: React.ReactNode;
    isButton?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isMultiple?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    onAdd?: (value: any) => void;
    onBlur?: () => void;
    onChange?: (value: any) => void;
    onClose?: () => void;
    onSearch?: (filteredOptions: any[], query: string) => Option[];
    options: Option[];
    placeholder?: string;
    renderLabel?: (item: any) => any;
    searchInput?: {
        autoFocus: boolean;
    };
    tabIndex?: number;
    transform?: (value: any) => any;
    value?: any;
    withEllipsis?: boolean;
    withLabel?: boolean;
}
export declare type IDropdown<Option> = React.ComponentType<Props<Option>> & {
    Header: React.ComponentType<{
        content: React.ReactNode;
    }>;
};
declare const Dropdown: IDropdown<any>;
export default Dropdown;
