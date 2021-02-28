import React from 'react';
interface Props {
    address: string;
    className?: string;
    onClose: () => void;
}
declare function IdentityMain({ address, className, onClose }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof IdentityMain, any, {}, never>;
export default _default;
