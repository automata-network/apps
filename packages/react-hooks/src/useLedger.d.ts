import { Ledger } from '@polkadot/hw-ledger';
interface StateBase {
    isLedgerCapable: boolean;
    isLedgerEnabled: boolean;
}
interface State extends StateBase {
    getLedger: () => Ledger;
}
export declare function useLedger(): State;
export {};
