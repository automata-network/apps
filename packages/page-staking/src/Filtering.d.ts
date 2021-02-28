import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    nameFilter: string;
    setNameFilter: (value: string, isQuery: boolean) => void;
    setWithIdentity: (value: boolean) => void;
    withIdentity: boolean;
}
declare function Filtering({ children, className, nameFilter, setNameFilter, setWithIdentity, withIdentity }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Filtering>;
export default _default;
