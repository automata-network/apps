import React from 'react';
interface Props {
    members: string[];
    refresh: () => void;
}
declare function TipCreate({ members, refresh }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TipCreate>;
export default _default;
