import type { PayoutValidator } from './types';
import React from 'react';
interface Props {
    className?: string;
    isAll?: boolean;
    isDisabled?: boolean;
    payout?: PayoutValidator | PayoutValidator[];
}
declare function PayButton({ className, isAll, isDisabled, payout }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof PayButton, any, {}, never>>;
export default _default;
