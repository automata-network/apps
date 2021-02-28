import React from 'react';
interface Props {
    codeHash?: string | null;
    onChange: React.Dispatch<boolean>;
}
declare function ValidateCode({ codeHash, onChange }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ValidateCode>;
export default _default;
