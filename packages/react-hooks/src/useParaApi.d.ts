import type BN from 'bn.js';
import type { LinkOption } from '@polkadot/apps-config/settings/types';
import { ApiPromise } from '@polkadot/api';
interface Result {
    api?: ApiPromise | null;
    endpoints: LinkOption[];
}
export declare function useParaApi(paraId: BN | number): Result;
export {};
