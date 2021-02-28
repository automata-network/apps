import type { Text } from '@polkadot/types';
import type { RuntimeVersion } from '@polkadot/types/interfaces';
import type { DefinitionRpcExt, Registry } from '@polkadot/types/types';
export declare function getAllRpc(registry: Registry, chain: Text, { specName }: RuntimeVersion): Record<string, Record<string, DefinitionRpcExt>>;
