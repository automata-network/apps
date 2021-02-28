import React from 'react';
import useCounter from './useCounter';
interface Props {
    basePath: string;
    className?: string;
}
export { useCounter };
declare function SocietyApp({ basePath, className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SocietyApp>;
export default _default;
