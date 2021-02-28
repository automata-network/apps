import type { ApiPromise } from '@polkadot/api';
interface InflationParams {
    falloff: number;
    idealStake: number;
    maxInflation: number;
    minInflation: number;
}
export declare function getInflationParams(api: ApiPromise): InflationParams;
export {};
