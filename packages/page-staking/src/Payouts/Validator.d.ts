import type { PayoutValidator } from './types';
import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    payout: PayoutValidator;
}
declare function Validator({ className, isDisabled, payout }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Validator>;
export default _default;
