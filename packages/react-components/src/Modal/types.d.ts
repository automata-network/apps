import React from 'react';
export interface ColumnProps {
    children: React.ReactNode;
    className?: string;
}
export interface ModalProps {
    children: React.ReactNode;
    className?: string;
    header?: React.ReactNode;
    open?: boolean;
    [index: string]: any;
}
export interface ActionsProps {
    className?: string;
    cancelLabel?: string;
    children?: React.ReactNode;
    withOr?: boolean;
    onCancel: () => void;
}
