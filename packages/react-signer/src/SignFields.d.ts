import type { SignerOptions } from '@polkadot/api/submittable/types';
import React from 'react';
interface Props {
    address: string | null;
    className?: string;
    onChange: (signedOptions: Partial<SignerOptions>) => void;
    signedTx: string | null;
}
declare function SignFields({ address, onChange, signedTx }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SignFields>;
export default _default;
