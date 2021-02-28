import React from 'react';
interface Props {
    allAccounts: string[];
    className?: string;
    isMine?: boolean;
    sudoKey?: string;
}
declare function SetKey({ allAccounts, className, isMine, sudoKey }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof SetKey, any, {}, never>>;
export default _default;
