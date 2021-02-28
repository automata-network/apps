import type { ActionStatus } from '@polkadot/react-components/Status/types';
import type { CreateResult } from '@polkadot/ui-keyring/types';
import type { ModalProps } from '../types';
import React from 'react';
declare type PairType = 'ecdsa' | 'ed25519' | 'ed25519-ledger' | 'ethereum' | 'sr25519';
interface Props extends ModalProps {
    className?: string;
    onClose: () => void;
    onStatusChange: (status: ActionStatus) => void;
    seed?: string;
    type?: PairType;
}
export declare function downloadAccount({ json, pair }: CreateResult): void;
declare function Create({ className, onClose, onStatusChange, seed: propsSeed, type: propsType }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Create, any, {}, never>>;
export default _default;
