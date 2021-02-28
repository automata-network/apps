import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    help?: React.ReactNode;
    isError?: boolean;
    isReadOnly?: boolean;
    label?: React.ReactNode;
    onChange?: (arg: string) => void;
    seed?: string;
    withLabel?: boolean;
}
declare function TextArea({ children, className, help, isError, isReadOnly, label, onChange, seed, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof TextArea, any, {}, never>>;
export default _default;
