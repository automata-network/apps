import type { Hash } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
declare type AtQuery<I extends any[]> = (hash: string | Uint8Array, ...params: I) => Promise<Codec>;
export default function getHistoric<T extends Codec, I extends any[] = any[]>(atQuery: AtQuery<I>, params: I, hashes: Hash[]): Promise<[Hash, T][]>;
export {};
