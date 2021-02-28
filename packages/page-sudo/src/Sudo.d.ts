import React from 'react';
interface Props {
    className?: string;
    isMine: boolean;
    sudoKey?: string;
}
declare function Sudo({ className, isMine, sudoKey }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Sudo, any, {}, never>>;
export default _default;
