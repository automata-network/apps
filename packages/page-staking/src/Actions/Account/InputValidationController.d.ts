import React from 'react';
interface Props {
    accountId: string | null;
    controllerId: string | null;
    defaultController?: string;
    onError: (error: string | null, isFatal: boolean) => void;
}
declare function ValidateController({ accountId, controllerId, defaultController, onError }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ValidateController>;
export default _default;
