import type { AccountId, Hash } from '@polkadot/types/interfaces';
export interface ComponentProps {
    className?: string;
    isMember: boolean;
    prime?: AccountId | null;
    proposals?: Hash[];
    members: string[];
}
