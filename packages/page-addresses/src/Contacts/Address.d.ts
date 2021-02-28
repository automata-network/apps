import React from 'react';
interface Props {
    address: string;
    className?: string;
    filter: string;
    isFavorite: boolean;
    toggleFavorite: (address: string) => void;
}
declare function Address({ address, className, filter, isFavorite, toggleFavorite }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Address, any, {}, never>>;
export default _default;
