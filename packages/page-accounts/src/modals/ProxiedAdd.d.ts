import type { ActionStatus } from '@polkadot/react-components/Status/types';
import type { ModalProps } from '../types';
import React from 'react';
interface Props extends ModalProps {
    className?: string;
    onClose: () => void;
    onStatusChange: (status: ActionStatus) => void;
}
declare function ProxyAdd({ className, onClose, onStatusChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ProxyAdd>;
export default _default;
