import React from 'react';
interface Props {
    address: string;
    registrars: {
        address: string;
        index: number;
    }[];
    toggleJudgement: () => void;
}
declare function RegistrarJudgement({ address, registrars, toggleJudgement }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof RegistrarJudgement>;
export default _default;
