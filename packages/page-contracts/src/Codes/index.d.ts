import React from 'react';
interface Props {
    onShowDeploy: (codeHash: string, constructorIndex: number) => void;
    updated: number;
}
declare function Codes({ onShowDeploy }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Codes>;
export default _default;
