import React from 'react';
interface Props {
    className?: string;
    filter?: string[];
    onChange: (value: string | null) => void;
}
declare function VoteAccount({ className, filter, onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof VoteAccount>;
export default _default;
