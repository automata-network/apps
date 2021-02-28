import type { Group } from './types';
import React from 'react';
interface Props {
    affinities: Record<string, string>;
    apiUrl: string;
    children?: React.ReactNode;
    className?: string;
    index: number;
    isSelected: boolean;
    setApiUrl: (apiUrl: string) => void;
    setGroup: (groupIndex: number) => void;
    value: Group;
}
declare function GroupDisplay({ affinities, apiUrl, children, className, index, isSelected, setApiUrl, setGroup, value: { header, networks } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof GroupDisplay, any, {}, never>>;
export default _default;
