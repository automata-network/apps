import React from 'react';
interface Dimensions {
    windowHeight: number;
    windowWidth: number;
}
interface Props {
    children: React.ReactNode;
}
declare const WindowDimensionsCtx: React.Context<Dimensions>;
declare function WindowDimensionsProvider({ children }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof WindowDimensionsProvider>;
export default _default;
export { WindowDimensionsCtx };
