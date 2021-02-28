import type { AccountId, Balance, UnappliedSlashOther } from '@polkadot/types/interfaces';
import BN from 'bn.js';
export interface AmountValidateState {
    error: string | null;
    warning: string | null;
}
interface Unapplied {
    others: UnappliedSlashOther[];
    own: Balance;
    payout: Balance;
    reporters: AccountId[];
    validator: AccountId;
}
export interface Slash {
    era: BN;
    slashes: Unapplied[];
}
export declare type DestinationType = 'Staked' | 'Stash' | 'Controller' | 'Account';
export {};
