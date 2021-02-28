import type { KeyringPair } from '@polkadot/keyring/types';
import BN from 'bn.js';
import { ApiPromise } from '@polkadot/api';
export declare function acceptCurator(api: ApiPromise, id: number, signer: KeyringPair): Promise<void>;
export declare function awardBounty(api: ApiPromise, index: number, signer: KeyringPair): Promise<void>;
export declare function claimBounty(api: ApiPromise, index: number, signer: KeyringPair): Promise<void>;
export declare function proposeBounty(api: ApiPromise, value: BN, title: string, signer: KeyringPair): Promise<number>;
export declare function proposeCurator(api: ApiPromise, index: number, signer: KeyringPair): Promise<void>;
export declare function approveBounty(api: ApiPromise, index: number, signer: KeyringPair): Promise<void>;
