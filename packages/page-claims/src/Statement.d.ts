import type { StatementKind } from '@polkadot/types/interfaces';
import React from 'react';
export interface Props {
    className?: string;
    kind?: StatementKind;
    systemChain: string;
}
declare function Statement({ className, kind, systemChain }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Statement, any, {}, never>>;
export default _default;
