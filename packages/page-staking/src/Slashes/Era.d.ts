import type { SlashEra } from './types';
import React from 'react';
interface Props {
    buttons: React.ReactNode;
    councilId: string | null;
    councilThreshold: number;
    slash: SlashEra;
}
declare function Slashes({ buttons, councilId, councilThreshold, slash }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Slashes>;
export default _default;
