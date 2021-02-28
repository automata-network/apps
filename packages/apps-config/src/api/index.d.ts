import typesChain from './chain';
import typesSpec from './spec';
export * from './constants';
export * from './params';
export declare function getChainTypes(specName: string, chainName: string): Record<string, string | Record<string, unknown>>;
export declare const typesBundle: {
    spec: {
        Equilibrium: {
            derives: {
                balances: {
                    account: (instanceId: string, api: import("@polkadot/api/types").ApiInterfaceRx) => (address: string | import("@polkadot/types/interfaces").AccountId | import("@polkadot/types/interfaces").Address | import("@polkadot/types/interfaces").AccountIndex) => import("rxjs").Observable<{
                        accountNonce: import("@polkadot/types/interfaces").Index;
                    }>;
                    all: (instanceId: string, api: import("@polkadot/api/types").ApiInterfaceRx) => (address: string | import("@polkadot/types/interfaces").AccountId | import("@polkadot/types/interfaces").Address | import("@polkadot/types/interfaces").AccountIndex) => import("rxjs").Observable<import("./specVersioned/equilibrium").EQDeriveBalancesAll>;
                };
            };
        };
        acala: import("@polkadot/types/types").OverrideBundleDefinition;
        'btc-parachain': import("@polkadot/types/types").OverrideBundleDefinition;
        edgeware: import("@polkadot/types/types").OverrideBundleDefinition;
        kulupu: import("@polkadot/types/types").OverrideBundleDefinition;
        laminar: import("@polkadot/types/types").OverrideBundleDefinition;
        mandala: import("@polkadot/types/types").OverrideBundleDefinition;
        'moonbase-alphanet': import("@polkadot/types/types").OverrideBundleDefinition;
        moonbeam: import("@polkadot/types/types").OverrideBundleDefinition;
        'moonbeam-standalone': import("@polkadot/types/types").OverrideBundleDefinition;
        'node-moonbeam': import("@polkadot/types/types").OverrideBundleDefinition;
        'sora-substrate': import("@polkadot/types/types").OverrideBundleDefinition;
    };
};
export { typesChain, typesSpec };
