import React from 'react';
interface Props {
    className?: string;
    offset?: number | string;
    onClose: () => void;
}
declare function Endpoints({ className, offset, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Endpoints, any, {}, never>>;
export default _default;
