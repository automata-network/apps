import type { Bytes, Option } from '@polkadot/types';
import type { BlockNumber, Call, SchedulePeriod, SchedulePriority } from '@polkadot/types/interfaces';
export interface ScheduledExt {
    blockNumber: BlockNumber;
    call: Call;
    key: string;
    maybeId: Option<Bytes>;
    maybePeriodic: Option<SchedulePeriod>;
    priority: SchedulePriority;
}
