import React from 'react';
interface Option {
    text: React.ReactNode;
    value: number | string;
}
export default function itemOption(label: string, value: string | number, img: unknown): Option;
export {};
