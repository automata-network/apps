import type { DefinitionRpcExt } from '@polkadot/types/types';
import type { DropdownOptions } from '../../util/types';
import { ApiPromise } from '@polkadot/api';
export default function createOptions(api: ApiPromise, rpcs: Record<string, Record<string, DefinitionRpcExt>>, sectionName: string): DropdownOptions;
