import BN from 'bn.js';
declare const _default: {
    chains: {
        Kusama: string;
        'Kusama CC3': string;
        Polkadot: string;
    };
    create: (chain: string, path: string, data: BN | number | string) => string;
    isActive: boolean;
    logo: string;
    paths: {
        bounty: string;
        council: string;
        proposal: string;
        referendum: string;
        tip: string;
        treasury: string;
    };
    url: string;
};
export default _default;
