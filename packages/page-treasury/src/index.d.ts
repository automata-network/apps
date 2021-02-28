import React from 'react';
export { default as useCounter } from './useCounter';
interface Props {
    basePath: string;
}
declare function TreasuryApp({ basePath }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TreasuryApp>;
export default _default;
