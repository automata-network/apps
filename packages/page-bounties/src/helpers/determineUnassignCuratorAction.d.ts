import type { BountyStatus } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import { UserRole, ValidUnassignCuratorAction } from '../types';
export declare function determineUnassignCuratorAction(roles: UserRole[], status: BountyStatus, blocksUntilUpdate?: BN): ValidUnassignCuratorAction[];
