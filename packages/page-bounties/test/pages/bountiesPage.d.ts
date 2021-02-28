import { ApiPromise } from '@polkadot/api';
import { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import { BountyApi } from '@polkadot/app-bounties/hooks';
import { Bounty, BountyIndex, BountyStatus } from '@polkadot/types/interfaces';
declare type FindOne = (match: string) => Promise<HTMLElement>;
declare type FindManyWithMatcher = (match: string | ((match: string) => boolean)) => Promise<HTMLElement[]>;
declare type GetMany = (match: string) => HTMLElement[];
interface RenderedBountiesPage {
    findAllByTestId: FindManyWithMatcher;
    findByText: FindOne;
    findByRole: FindOne;
    findByTestId: FindOne;
    getAllByRole: GetMany;
    queryAllByText: GetMany;
}
export declare class BountiesPage {
    aBounty: ({ status, value }?: Partial<Bounty>) => Bounty;
    aBountyIndex: (index?: number) => BountyIndex;
    aBountyStatus: (status: string) => BountyStatus;
    bountyStatusWith: ({ curator, status }: {
        curator?: string;
        status?: string;
    }) => BountyStatus;
    bountyWith: ({ status, value }: {
        status?: string;
        value?: number;
    }) => Bounty;
    findByRole?: FindOne;
    findByText?: FindOne;
    findByTestId?: FindOne;
    getAllByRole?: GetMany;
    findAllByTestId?: FindManyWithMatcher;
    queryAllByText?: GetMany;
    constructor(api: ApiPromise);
    renderOne(bounty: Bounty, proposals?: DeriveCollectiveProposal[], description?: string, index?: BountyIndex): RenderedBountiesPage;
    renderMany(bountyApi?: Partial<BountyApi>, { balance }?: {
        balance?: number | undefined;
    }): RenderedBountiesPage;
    private renderBounties;
    private assertRendered;
    openProposeCurator(): Promise<void>;
    enterCuratorsFee(fee: string): Promise<void>;
    expectText(expected: string): Promise<void>;
    assignCuratorButton(): Promise<HTMLElement>;
    enterProposingAccount(account: string): void;
    enterProposedCurator(curator: string): void;
    expectExtrinsicQueued(extrinsicPart: {
        accountId: string;
        extrinsic?: string;
    }): void;
    expectTextAbsent(text: string): void;
    findAllDescriptions(): Promise<string[]>;
    rendered(): Promise<void>;
    openAddBounty(): Promise<void>;
    enterBountyTitle(title: string): Promise<void>;
    openCloseBounty(): Promise<void>;
    clickButton(buttonName: string): Promise<void>;
    clickButtonByTestId(buttonName: string): Promise<void>;
    clickButtonByText(buttonName: string): Promise<void>;
    openRejectCuratorRole(): Promise<void>;
    openExtraActions(): Promise<void>;
    openAcceptCuratorRole(): Promise<void>;
    findCuratorsFee(): Promise<string>;
    findCuratorsDeposit(): Promise<string>;
    openExtendExpiry(): Promise<void>;
    enterExpiryRemark(remark: string): Promise<void>;
    openGiveUpCuratorsRole(): Promise<void>;
    openSlashCuratorByCouncil(): Promise<void>;
    openAwardBeneficiary(): Promise<void>;
    enterBeneficiary(beneficiary: string): void;
}
export {};
