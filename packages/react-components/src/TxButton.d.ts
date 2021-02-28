import type { TxButtonProps as Props } from './types';
import React from 'react';
declare function TxButton({ accountId, className, extrinsic: propsExtrinsic, icon, isBasic, isBusy, isDisabled, isIcon, isToplevel, isUnsigned, label, onClick, onFailed, onSendRef, onStart, onSuccess, onUpdate, params, tooltip, tx, withSpinner, withoutLink }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TxButton>;
export default _default;
