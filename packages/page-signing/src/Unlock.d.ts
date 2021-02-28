import type { KeyringPair } from '@polkadot/keyring/types';
import React from 'react';
interface Props {
    onClose: () => void;
    onUnlock: () => void;
    pair: KeyringPair | null;
}
declare function Unlock({ onClose, onUnlock, pair }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Unlock>;
export default _default;
