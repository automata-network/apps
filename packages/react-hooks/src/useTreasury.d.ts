import type { Balance } from '@polkadot/types/interfaces';
import BN from 'bn.js';
interface Treasury {
    value?: Balance;
    burn?: BN;
    spendPeriod: BN;
}
export declare function useTreasury(): Treasury;
export {};
