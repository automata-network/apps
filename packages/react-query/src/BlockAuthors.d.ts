import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
export interface Authors {
    byAuthor: Record<string, string>;
    eraPoints: Record<string, string>;
    lastBlockAuthors: string[];
    lastBlockNumber?: string;
    lastHeader?: HeaderExtended;
    lastHeaders: HeaderExtended[];
}
interface Props {
    children: React.ReactNode;
}
declare const BlockAuthorsContext: React.Context<Authors>;
declare const ValidatorsContext: React.Context<string[]>;
declare function BlockAuthorsBase({ children }: Props): React.ReactElement<Props>;
declare const BlockAuthors: React.MemoExoticComponent<typeof BlockAuthorsBase>;
export { BlockAuthorsContext, BlockAuthors, ValidatorsContext };
