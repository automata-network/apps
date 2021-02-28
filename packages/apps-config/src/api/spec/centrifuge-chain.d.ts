declare const _default: {
    AnchorData: {
        id: string;
        docRoot: string;
        anchoredBlock: string;
    };
    Fee: {
        key: string;
        price: string;
    };
    PreCommitData: {
        signingRoot: string;
        identity: string;
        expirationBlock: string;
    };
    Proof: {
        leafHash: string;
        sortedHashes: string;
    };
    MultiAccountData: {
        threshold: string;
        signatories: string;
        deposit: string;
        depositor: string;
    };
    ChainId: string;
    ResourceId: string;
    'chainbridge::ChainId': string;
    DepositNonce: string;
    RegistryId: string;
    TokenId: string;
    AssetId: {
        registryId: string;
        tokenId: string;
    };
    RegistryInfo: {
        ownerCanBurn: string;
        fields: string;
    };
    AssetInfo: {
        metadata: string;
    };
    ProofMint: {
        value: string;
        property: string;
        salt: string;
        hashes: string;
    };
    MintInfo: {
        anchorId: string;
        staticHashes: string;
        proofs: string;
    };
};
export default _default;
