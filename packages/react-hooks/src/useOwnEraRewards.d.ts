import type { DeriveStakerReward } from '@polkadot/api-derive/types';
import type { StakerState } from './types';
interface State {
    allRewards?: Record<string, DeriveStakerReward[]> | null;
    isLoadingRewards: boolean;
    rewardCount: number;
}
export declare function useOwnEraRewards(maxEras?: number, ownValidators?: StakerState[]): State;
export {};
