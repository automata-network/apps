import { ApiPromise } from '@polkadot/api';
export declare function findMissingApis(api: ApiPromise, needsApi?: (string | string[])[]): (string | string[])[];
