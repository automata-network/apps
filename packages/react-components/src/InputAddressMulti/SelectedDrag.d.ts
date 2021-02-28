import React from 'react';
interface Props {
    address: string;
    index: number;
    onDeselect: (index: number) => void;
}
declare function Selected({ address, index, onDeselect }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Selected>;
export default _default;
