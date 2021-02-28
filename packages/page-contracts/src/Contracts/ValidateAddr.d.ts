import React from 'react';
interface Props {
    address?: string | null;
    onChange: (isValid: boolean) => void;
}
declare function ValidateAddr({ address, onChange }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ValidateAddr>;
export default _default;
