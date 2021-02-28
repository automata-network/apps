import React from 'react';
interface Props {
    className?: string;
    error?: Error | null;
    value?: string | null;
}
declare function BlockByHash({ className, error, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof BlockByHash>;
export default _default;
