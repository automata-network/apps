import type { AccountId } from '@polkadot/types/interfaces';
import BN from 'bn.js';
export declare function isClaimable(accounts: string[], beneficiary: AccountId, payoutDue: BN): boolean;
