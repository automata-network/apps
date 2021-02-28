import React from 'react';
interface Props {
    className?: string;
    onChange: (string: string) => void;
    seedType: string;
}
declare function CreateSuriLedger({ className, onChange, seedType }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof CreateSuriLedger>;
export default _default;
