import type { H256, Multisig } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    address: string;
    className?: string;
    onClose: () => void;
    ongoing: [H256, Multisig][];
    threshold: number;
    who: string[];
}
declare function MultisigApprove({ className, onClose, ongoing, threshold, who }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof MultisigApprove, any, {}, never>>;
export default _default;
