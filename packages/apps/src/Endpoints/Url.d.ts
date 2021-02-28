import React from 'react';
interface Props {
    apiUrl: string;
    className?: string;
    label: React.ReactNode;
    setApiUrl: (apiUrl: string) => void;
    url: string;
}
declare function Url({ apiUrl, className, label, setApiUrl, url }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Url, any, {}, never>>;
export default _default;
