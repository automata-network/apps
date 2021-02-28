import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    isFinalized?: boolean;
    label?: React.ReactNode;
    withPound?: boolean;
}
declare function BestNumber({ children, className, isFinalized, label, withPound }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BestNumber>;
export default _default;
