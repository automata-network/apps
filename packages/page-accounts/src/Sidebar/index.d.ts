import React from 'react';
interface Props {
    children: React.ReactNode;
}
declare type State = [string | null, (() => void) | null];
declare type ToggleContext = undefined | (([address, onUpdateName]: State) => void);
declare const AccountSidebarToggle: React.Context<ToggleContext>;
declare function AccountSidebar({ children }: Props): React.ReactElement<Props>;
export { AccountSidebarToggle };
declare const _default: React.MemoExoticComponent<typeof AccountSidebar>;
export default _default;
