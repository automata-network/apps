import type { DeriveHeartbeatAuthor } from '@polkadot/api-derive/types';
import type { NominatedBy as NominatedByType, ValidatorInfo } from '../../types';
import React from 'react';
interface Props {
    address: string;
    className?: string;
    filterName: string;
    hasQueries: boolean;
    isElected: boolean;
    isFavorite: boolean;
    isMain?: boolean;
    lastBlock?: string;
    nominatedBy?: NominatedByType[];
    points?: string;
    recentlyOnline?: DeriveHeartbeatAuthor;
    toggleFavorite: (accountId: string) => void;
    validatorInfo?: ValidatorInfo;
    withIdentity: boolean;
}
declare function Address({ address, className, filterName, hasQueries, isElected, isFavorite, isMain, lastBlock, nominatedBy, points, recentlyOnline, toggleFavorite, validatorInfo, withIdentity }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Address>;
export default _default;
