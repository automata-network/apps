import React from 'react';
interface Props {
    address: string;
    filter: string;
    isHidden?: boolean;
    onSelect: (address: string) => void;
}
declare function Available({ address, filter, isHidden, onSelect }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Available>;
export default _default;
