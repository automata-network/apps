import React from 'react';
interface Props {
    accountDelegating: string | null;
    onClose: () => void;
}
declare function Undelegate({ accountDelegating, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Undelegate>;
export default _default;
