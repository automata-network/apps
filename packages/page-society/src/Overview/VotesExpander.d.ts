import type { VoteType } from '../types';
import React from 'react';
interface Props {
    label: string;
    votes: VoteType[];
}
declare function VotesExpander({ label, votes }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof VotesExpander>;
export default _default;
