import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    defaultValue?: string | null;
    isError?: boolean;
    onChange: (accountId: string | undefined | null, accountNonce: BN) => void;
}
declare function Account({ className, defaultValue, isError, onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Account, any, {}, never>>;
export default _default;
