import React from 'react';
import useCounter from './useCounter';
export { useCounter };
interface Props {
    basePath: string;
    className?: string;
}
declare function CouncilApp({ basePath, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof CouncilApp, any, {}, never>>;
export default _default;
