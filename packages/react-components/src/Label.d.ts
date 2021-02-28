import React from 'react';
interface Props {
    className?: string;
    help?: React.ReactNode;
    label?: React.ReactNode;
    withEllipsis?: boolean;
}
declare function Label({ className, help, label, withEllipsis }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Label>;
export default _default;
