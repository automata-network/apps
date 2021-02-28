import type { KeypairType } from '@polkadot/util-crypto/types';
import React from 'react';
interface Props {
    address?: string;
    derivePath: string;
    isBusy: boolean;
    name?: string;
    pairType: KeypairType;
    seed?: string;
}
declare function CreateConfirmation({ address, derivePath, name, pairType, seed }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof CreateConfirmation>;
export default _default;
