import type { IdentityProps } from '@polkadot/react-identicon/types';
import React from 'react';
interface Props {
    className?: string;
    prefix?: IdentityProps['prefix'];
    size?: number;
    theme?: IdentityProps['theme'] | 'robohash';
    value?: string | Uint8Array | null;
}
export declare function getIdentityTheme(systemName: string): 'substrate';
declare function IdentityIcon({ className, prefix, size, theme, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof IdentityIcon, any, {}, never>>;
export default _default;
