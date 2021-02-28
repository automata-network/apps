import type { AbiMessage } from '@polkadot/api-contract/types';
import { ApiPromise } from '@polkadot/api';
import { ContractPromise as Contract } from '@polkadot/api-contract';
export declare function findCallMethod(callContract: Contract | null, callMethodIndex?: number): AbiMessage | null;
export declare function getContractMethodFn(callContract: Contract | null, callMethodIndex: number | null): AbiMessage | null;
export declare function getContractForAddress(api: ApiPromise, address: string | null): Contract | null;
export declare function getCallMessageOptions(callContract: Contract | null): any[];
