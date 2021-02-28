import BN from 'bn.js';
declare const _default: {
    chains: {
        'Acala Mandala TC5': string;
        'Bifrost Asgard Nightly': string;
        'Centrifuge Mainnet': string;
        ChainX: string;
        'Crust Maxwell': string;
        'Darwinia CC1': string;
        'Darwinia Crab': string;
        Edgeware: string;
        Equilibrium: string;
        Kulupu: string;
        Kusama: string;
        'Laminar Turbulence TC2': string;
        'Phala PoC-3': string;
        Plasm: string;
        Polkadot: string;
        Rococo: string;
        Stafi: string;
        Westend: string;
    };
    create: (chain: string, path: string, data: BN | number | string) => string;
    isActive: boolean;
    logo: string;
    paths: {
        address: string;
        block: string;
        council: string;
        extrinsic: string;
        proposal: string;
        referendum: string;
        techcomm: string;
        treasury: string;
    };
    url: string;
};
export default _default;
