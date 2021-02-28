import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';
export interface BountyStatusType {
    beneficiary: AccountId | undefined;
    bountyStatus: StatusName;
    curator: AccountId | undefined;
    unlockAt: BlockNumber | undefined;
    updateDue: BlockNumber | undefined;
}
export declare type HelpMessages = Record<StatusName, string>;
export declare type StatusName = 'Active' | 'Approved' | 'CuratorProposed' | 'Funded' | 'PendingPayout' | 'Proposed';
export declare type BountyVotingStatuses = {
    [status in StatusName]: string[];
};
export declare type ValidUnassignCuratorAction = 'UnassignCurator' | 'SlashCuratorMotion' | 'SlashCuratorAction';
export declare type UnassignCuratorAction = ValidUnassignCuratorAction | 'None';
export declare type UserRole = 'User' | 'Member' | 'Curator' | 'None';
