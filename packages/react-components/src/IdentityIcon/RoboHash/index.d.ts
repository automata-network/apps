import React from 'react';
interface Props {
    className?: string;
    publicKey: string;
    size: number;
}
declare function RoboHash({ className, publicKey, size }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof RoboHash, any, {}, never>>;
export default _default;
