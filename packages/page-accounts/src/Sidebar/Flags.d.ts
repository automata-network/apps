import type { AddressFlags } from '@polkadot/react-hooks/types';
import React from 'react';
interface Props {
    flags: AddressFlags;
}
declare function Flags({ flags: { isCouncil, isDevelopment, isExternal, isInjected, isMultisig, isNominator, isProxied, isSociety, isSudo, isTechCommittee, isValidator } }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Flags>;
export default _default;
