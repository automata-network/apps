import React from 'react';
interface Props {
    address: string;
    filter?: string;
    isHidden?: boolean;
    onDeselect: (address: string) => void;
}
declare function Selected({ address, filter, isHidden, onDeselect }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Selected>;
export default _default;
