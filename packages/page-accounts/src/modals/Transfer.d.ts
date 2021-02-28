import React from 'react';
interface Props {
    className?: string;
    onClose: () => void;
    recipientId?: string;
    senderId?: string;
}
declare function Transfer({ className, onClose, recipientId: propRecipientId, senderId: propSenderId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Transfer, any, {}, never>>;
export default _default;
