import React from 'react';
export interface TabItem {
    alias?: string;
    count?: number;
    hasParams?: boolean;
    isExact?: boolean;
    isRoot?: boolean;
    name: string;
    text: React.ReactNode;
}
