import type { VoteType } from '../types';
import React from 'react';
interface Props {
    votes?: VoteType[];
}
declare function Votes({ votes }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Votes>;
export default _default;
