import React from 'react';
interface Props {
    address: string;
    className?: string;
    isFavorite: boolean;
    toggleFavorite: (accountId: string) => void;
}
declare function Favorite({ address, className, isFavorite, toggleFavorite }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Favorite, any, {}, never>>;
export default _default;
