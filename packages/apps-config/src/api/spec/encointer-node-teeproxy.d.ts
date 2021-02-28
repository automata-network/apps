declare const _default: {
    Address: string;
    LookupSource: string;
    CeremonyPhaseType: {
        _enum: string[];
    };
    CeremonyIndexType: string;
    CurrencyIdentifier: string;
    CurrencyCeremony: {
        cid: string;
        cindex: string;
    };
    Location: {
        lat: string;
        lon: string;
    };
    CurrencyPropertiesType: {
        name_utf8: string;
        demurrage_per_block: string;
    };
    ShardIdentifier: string;
    Request: {
        shard: string;
        cyphertext: string;
    };
    Enclave: {
        pubkey: string;
        mrenclave: string;
        timestamp: string;
        url: string;
    };
};
export default _default;
