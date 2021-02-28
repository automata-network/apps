import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId, AccountIndex, Address, Balance, Index } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
export interface EQDeriveBalancesAll {
    additional: [];
    freeBalance: Balance;
    reservedBalance: Balance;
    vestingLocked: Balance;
    lockedBalance: Balance;
    accountId: AccountId;
    accountNonce: Index;
    lockedBreakdown: unknown[];
}
declare type EQDeriveBalancesAccountQuery = (address: AccountIndex | AccountId | Address | string) => Observable<{
    accountNonce: Index;
}>;
declare type EQDeriveBalancesAllQuery = (address: AccountIndex | AccountId | Address | string) => Observable<EQDeriveBalancesAll>;
declare const _default: {
    derives: {
        balances: {
            account: (instanceId: string, api: ApiInterfaceRx) => EQDeriveBalancesAccountQuery;
            all: (instanceId: string, api: ApiInterfaceRx) => EQDeriveBalancesAllQuery;
        };
    };
};
export default _default;
