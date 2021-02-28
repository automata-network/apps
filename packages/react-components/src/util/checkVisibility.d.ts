import type { DeriveAccountInfo } from '@polkadot/api-derive/types';
import { ApiPromise } from '@polkadot/api';
export default function checkVisibility(api: ApiPromise, address: string, accountInfo: DeriveAccountInfo, filterName?: string, onlyNamed?: boolean): boolean;
