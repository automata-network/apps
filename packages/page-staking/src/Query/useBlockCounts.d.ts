import type { u32 } from '@polkadot/types';
import type { SessionRewards } from '../types';
export default function useBlockCounts(accountId: string, sessionRewards: SessionRewards[]): u32[];
