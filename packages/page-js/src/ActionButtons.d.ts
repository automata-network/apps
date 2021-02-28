import React from 'react';
interface Props {
    className?: string;
    isCustomExample: boolean;
    isRunning: boolean;
    removeSnippet: () => void;
    runJs: () => void;
    saveSnippet: (snippetName: string) => void;
    snippetName?: string;
    stopJs: () => void;
}
declare function ActionButtons({ className, isCustomExample, isRunning, removeSnippet, runJs, saveSnippet, stopJs }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ActionButtons>;
export default _default;
