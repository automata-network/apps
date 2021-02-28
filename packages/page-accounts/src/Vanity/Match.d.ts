import React from 'react';
interface Props {
    address: string;
    className?: string;
    count: number;
    offset: number;
    onCreateToggle: (seed: string) => void;
    onRemove: (address: string) => void;
    seed: Uint8Array;
}
declare function Match({ address, className, count, offset, onCreateToggle, onRemove, seed }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Match, any, {}, never>>;
export default _default;
