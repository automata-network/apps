import React from 'react';
export { default as useCounter } from './useCounter';
interface Props {
    basePath: string;
}
declare function DemocracyApp({ basePath }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof DemocracyApp>;
export default _default;
