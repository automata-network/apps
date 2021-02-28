import type { ApiProps } from '@polkadot/react-api/types';
import type { Header } from '@polkadot/types/interfaces';
import React from 'react';
interface Props extends ApiProps {
    className?: string;
    finHead?: Header;
    newHead?: Header;
}
declare function Forks({ className }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Forks, any, {}, never>>;
export default _default;
