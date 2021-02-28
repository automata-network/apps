/// <reference types="react" />
import type { Registry, TypeDef } from '@polkadot/types/types';
import type { ComponentMap, Props } from '../types';
export default function findComponent(registry: Registry, def: TypeDef, overrides?: ComponentMap): React.ComponentType<Props>;
