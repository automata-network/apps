import type { Registry, TypeDef } from '@polkadot/types/types';
import type { RawParam } from './types';
export declare function createValue(registry: Registry, param: {
    type: TypeDef;
}): RawParam;
export default function createValues(registry: Registry, params: {
    type: TypeDef;
}[]): RawParam[];
