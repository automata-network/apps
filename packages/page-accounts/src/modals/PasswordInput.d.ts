import React from 'react';
declare type Props = {
    onChange: (password: string, isPasswordValid: boolean) => void;
    onEnter: () => void;
};
export default function PasswordInput({ onChange, onEnter }: Props): React.ReactElement;
export {};
