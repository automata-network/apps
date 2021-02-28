import React from 'react';
interface Props {
    address: string;
    className?: string;
    error?: string;
    onChange: (password: string, isUnlockCached: boolean) => void;
    onEnter?: () => void;
    password: string;
    tabIndex?: number;
}
declare function Unlock({ address, className, error, onChange, onEnter, tabIndex }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Unlock, any, {}, never>>;
export default _default;
