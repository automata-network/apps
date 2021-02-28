import React from 'react';
import StatusContext from './Context';
export { StatusContext };
interface Props {
    className?: string;
}
declare function Status({ className }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Status, any, {}, never>>;
export default _default;
