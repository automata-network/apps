import type { ProxyType } from '@polkadot/types/interfaces';
import BN from 'bn.js';
interface Proxy {
    address: string;
    delay: BN;
    isOwned: boolean;
    type: ProxyType;
}
interface State {
    hasOwned: boolean;
    owned: Proxy[];
    proxies: Proxy[];
}
export default function useProxies(address?: string | null): State;
export {};
