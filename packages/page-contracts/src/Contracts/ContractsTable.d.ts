import React from 'react';
export interface Props {
    contracts: string[];
    updated: number;
}
declare function ContractsTable({ contracts: keyringContracts }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ContractsTable>;
export default _default;
