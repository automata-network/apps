import React from 'react';
interface Props {
    className?: string;
    onChange: (index: number) => void;
    options: {
        isDisabled?: boolean;
        text: string;
        value: number;
    }[];
    value: number;
}
declare function ToggleGroup({ className, onChange, options, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ToggleGroup, any, {}, never>>;
export default _default;
