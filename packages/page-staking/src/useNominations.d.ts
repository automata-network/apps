import type { NominatedBy } from './types';
declare type Result = Record<string, NominatedBy[]>;
export default function useNominations(isActive?: boolean): Result | undefined;
export {};
