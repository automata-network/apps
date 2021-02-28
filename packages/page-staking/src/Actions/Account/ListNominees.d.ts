import React from 'react';
interface Props {
    nominating?: string[];
    stashId: string;
}
declare function ListNominees({ nominating, stashId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ListNominees>;
export default _default;
