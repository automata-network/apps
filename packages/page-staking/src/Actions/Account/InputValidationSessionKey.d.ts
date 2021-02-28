import type { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends I18nProps {
    controllerId: string;
    onError: (error: string | null) => void;
    sessionId: string | null;
    stashId: string;
}
declare function ValidateSessionEd25519({ onError, sessionId, stashId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ValidateSessionEd25519>;
export default _default;
