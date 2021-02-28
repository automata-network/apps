import React from 'react';
interface Props {
    className?: string;
    onChange: (key: string, val: string) => void;
    original: string;
    tkey: string;
    tval: string;
}
declare function StringInput({ className, onChange, original, tkey, tval }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof StringInput, any, {}, never>>;
export default _default;
