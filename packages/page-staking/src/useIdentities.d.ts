import type { DeriveHasIdentity } from '@polkadot/api-derive/types';
declare type Result = Record<string, DeriveHasIdentity>;
export default function useIdentities(validatorIds?: string[]): Result | undefined;
export {};
