import type { KeyringJson$Meta } from '@polkadot/ui-keyring/types';
import React from 'react';
interface Props {
    isMultisig: boolean;
    meta?: KeyringJson$Meta;
}
declare function Multisig({ isMultisig, meta }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Multisig>;
export default _default;
