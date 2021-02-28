import React from 'react';
import { namedLogos } from '@polkadot/apps-config';
interface Props {
    className?: string;
    isInline?: boolean;
    logo?: keyof typeof namedLogos;
    onClick?: () => any;
    withoutHl?: boolean;
}
declare function ChainImg({ className, isInline, logo, onClick, withoutHl }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ChainImg, any, {}, never>>;
export default _default;
