import type { SubmittableResult } from '@polkadot/api';
import type { SubmittableExtrinsic } from '@polkadot/api/promise/types';
import type { SignerResult } from '@polkadot/api/types';
import type { AccountId, Address } from '@polkadot/types/interfaces';
import type { DefinitionRpcExt, SignerPayloadJSON } from '@polkadot/types/types';
export declare type Actions = 'create' | 'edit' | 'restore' | 'forget' | 'backup' | 'changePassword' | 'transfer';
export interface ActionStatusBase {
    account?: AccountId | Address | string;
    message?: string;
    status: 'error' | 'event' | 'queued' | 'received' | 'success';
}
export interface ActionStatusPartial extends ActionStatusBase {
    action: Actions | string;
}
export interface ActionStatus extends ActionStatusBase {
    action: Actions | string | string[];
}
export interface AccountInfo {
    accountId?: string | null;
}
export declare type QueueTxStatus = 'future' | 'ready' | 'finalized' | 'finalitytimeout' | 'usurped' | 'dropped' | 'inblock' | 'invalid' | 'broadcast' | 'cancelled' | 'completed' | 'error' | 'incomplete' | 'queued' | 'qr' | 'retracted' | 'sending' | 'signing' | 'sent' | 'blocked';
export declare type SignerCallback = (id: number, result: SignerResult | null) => void;
export declare type TxCallback = (status: SubmittableResult) => void;
export declare type TxFailedCallback = (status: SubmittableResult | null) => void;
export interface QueueTx extends AccountInfo {
    error?: Error;
    extrinsic?: SubmittableExtrinsic;
    id: number;
    isUnsigned?: boolean;
    payload?: SignerPayloadJSON;
    result?: any;
    removeItem: () => void;
    rpc: DefinitionRpcExt;
    signerCb?: SignerCallback;
    txFailedCb?: TxFailedCallback;
    txSuccessCb?: TxCallback;
    txStartCb?: () => void;
    txUpdateCb?: TxCallback;
    values?: any[];
    status: QueueTxStatus;
}
export interface QueueStatus extends ActionStatus {
    id: number;
    isCompleted: boolean;
    removeItem: () => void;
}
export interface QueueTxResult {
    error?: Error;
    result?: any;
    status: QueueTxStatus;
}
export interface QueueTxExtrinsic extends AccountInfo {
    extrinsic?: SubmittableExtrinsic;
}
export interface QueueTxRpc extends AccountInfo {
    rpc: DefinitionRpcExt;
    values: any[];
}
export interface PartialAccountInfo {
    accountId?: string | null;
}
export interface PartialQueueTxExtrinsic extends PartialAccountInfo {
    extrinsic?: SubmittableExtrinsic;
    payload?: SignerPayloadJSON;
    signerCb?: SignerCallback;
    txFailedCb?: TxFailedCallback;
    txSuccessCb?: TxCallback;
    txStartCb?: () => void;
    txUpdateCb?: TxCallback;
    isUnsigned?: boolean;
}
export interface PartialQueueTxRpc extends PartialAccountInfo {
    rpc: DefinitionRpcExt;
    values: any[];
}
export declare type QueueTxRpcAdd = (value: PartialQueueTxRpc) => void;
export declare type QueueTxExtrinsicAdd = (value: PartialQueueTxExtrinsic) => void;
export declare type QueueTxPayloadAdd = (payload: SignerPayloadJSON, signerCb: SignerCallback) => void;
export declare type QueueTxMessageSetStatus = (id: number, status: QueueTxStatus, result?: any, error?: Error) => void;
export declare type QueueAction$Add = (status: ActionStatus | ActionStatus[]) => void;
export interface QueueProps {
    stqueue: QueueStatus[];
    txqueue: QueueTx[];
    queueAction: QueueAction$Add;
    queueExtrinsic: QueueTxExtrinsicAdd;
    queuePayload: QueueTxPayloadAdd;
    queueRpc: QueueTxRpcAdd;
    queueSetTxStatus: QueueTxMessageSetStatus;
}
