import { ApiPromise } from '@polkadot/api';
import { Bounty, BountyIndex, BountyStatus } from '@polkadot/types/interfaces';
export declare class BountyFactory {
    #private;
    constructor(api: ApiPromise);
    aBountyIndex: (index?: number) => BountyIndex;
    defaultBounty: () => Bounty;
    aBountyStatus: (status: string) => BountyStatus;
    bountyStatusWith: ({ curator, status, updateDue }?: {
        curator?: string | undefined;
        status?: string | undefined;
        updateDue?: number | undefined;
    }) => BountyStatus;
    bountyWith: ({ status, value }?: {
        status?: string | undefined;
        value?: number | undefined;
    }) => Bounty;
    aBounty: ({ fee, status, value }?: Partial<Bounty>) => Bounty;
}
