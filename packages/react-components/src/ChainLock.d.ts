import React from 'react';
interface Props {
    className?: string;
    genesisHash: string | null;
    isDisabled?: boolean;
    onChange: (genesisHash: string | null) => void;
}
declare function ChainLock({ className, genesisHash, isDisabled, onChange }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ChainLock, any, {}, never>>;
export default _default;
