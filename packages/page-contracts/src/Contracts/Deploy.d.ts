import React from 'react';
interface Props {
    codeHash: string;
    constructorIndex: number;
    onClose: () => void;
    setConstructorIndex: React.Dispatch<number>;
}
declare function Deploy({ codeHash, constructorIndex, onClose, setConstructorIndex }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Deploy>;
export default _default;
