import type { AccountId } from '@polkadot/types/interfaces';
import { UserRole } from '../types';
export declare type UserRolesInfo = {
    roles: UserRole[];
    isCurator: boolean;
};
export declare function useUserRole(curatorId?: AccountId): UserRolesInfo;
