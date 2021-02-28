import React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    is60?: boolean;
}
interface ColumnProps {
    children: React.ReactNode;
    className?: string;
}
declare type ColumarType = React.ComponentType<Props> & {
    Column: React.ComponentType<ColumnProps>;
};
declare const ColumarStyled: ColumarType;
export default ColumarStyled;
