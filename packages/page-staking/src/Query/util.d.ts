import BN from 'bn.js';
interface ToBN {
    toBn: () => BN;
}
export declare function balanceToNumber(amount: BN | ToBN | undefined, divisor: BN): number;
export {};
