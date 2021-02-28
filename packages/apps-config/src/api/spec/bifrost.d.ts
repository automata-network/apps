declare const _default: {
    Token: {
        symbol: string;
        precision: string;
        totalSupply: string;
    };
    VersionId: string;
    Action: {
        account: string;
        name: string;
        authorization: string;
        data: string;
    };
    IostAction: {
        contract: string;
        action_name: string;
        data: string;
    };
    PermissionLevel: {
        actor: string;
        permission: string;
    };
    PermissionName: string;
    ActionReceipt: {
        receiver: string;
        act_digest: string;
        global_sequence: string;
        recv_sequence: string;
        auth_sequence: string;
        code_sequence: string;
        abi_sequence: string;
    };
    Checksum256: string;
    BlockchainType: {
        _enum: string[];
    };
    Precision: string;
    BridgeAssetSymbol: {
        blockchain: string;
        symbol: string;
        precision: string;
    };
    ProducerSchedule: {
        version: string;
        producers: string;
    };
    ProducerKey: {
        producer_name: string;
        block_signing_key: string;
    };
    AccountName: string;
    ActionName: string;
    PublicKey: {
        type_: string;
        data: string;
    };
    UnsignedInt: string;
    Signature: {
        type_: string;
        data: string;
    };
    SignedBlockHeader: {
        block_header: string;
        producer_signature: string;
    };
    BlockHeader: {
        timestamp: string;
        producer: string;
        confirmed: string;
        previous: string;
        transaction_mroot: string;
        action_mroot: string;
        schedule_version: string;
        new_producers: string;
        header_extensions: string;
    };
    BlockTimestamp: string;
    Extension: string;
    IncrementalMerkle: {
        _node_count: string;
        _active_nodes: string;
    };
    Checksum256Array: string;
    FlatMap: {
        map: string;
    };
    TxSig: {
        signature: string;
        author: string;
    };
    MultiSig: {
        signatures: string;
        threshold: string;
    };
    MultiSigTx: {
        chain_id: string;
        raw_tx: string;
        multi_sig: string;
        action: string;
        from: string;
        token_symbol: string;
    };
    Sent: {
        tx_id: string;
        from: string;
        token_symbol: string;
    };
    Succeeded: {
        tx_id: string;
    };
    Failed: {
        tx_id: string;
        reason: string;
    };
    TxOut: {
        _enum: {
            Initialized: string;
            Created: string;
            SignComplete: string;
            Sent: string;
            Succeeded: string;
            Failed: string;
        };
    };
    RewardRecord: {
        account_id: string;
        record_amount: string;
    };
    ConvertPrice: string;
    RatePerBlock: string;
    Fee: string;
    PoolId: string;
    Nonce: string;
    PoolDetails: {
        owner: string;
        swap_fee_rate: string;
        active: string;
    };
    PoolCreateTokenDetails: {
        token_id: string;
        token_balance: string;
        token_weight: string;
    };
    TokenPool: string;
    VTokenPool: string;
    InVariantPool: string;
    TokenSymbol: {
        _enum: string[];
    };
    TransactionStatus: {
        _enum: string[];
    };
    Cost: string;
    Income: string;
    Price: string;
    AccountAsset: {
        balance: string;
        locked: string;
        available: string;
        cost: string;
        income: string;
    };
    SpecIndex: string;
    RequestIdentifier: string;
    DataVersion: string;
    ConvertPool: {
        token_pool: string;
        vtoken_pool: string;
        current_reward: string;
        pending_reward: string;
    };
    ProducerAuthoritySchedule: {
        version: string;
        producers: string;
    };
    ProducerAuthority: {
        producer_name: string;
        authority: string;
    };
    BlockSigningAuthority: string;
    BlockSigningAuthorityV0: {
        threshold: string;
        keys: string;
    };
    KeyWeight: {
        key: string;
        weight: string;
    };
    InvariantValue: string;
    PoolWeight: string;
    AssetConfig: {
        redeem_duration: string;
        min_reward_per_block: string;
    };
    ProxyValidatorRegister: {
        last_block: string;
        deposit: string;
        need: string;
        staking: string;
        reward_per_block: string;
        validator_address: string;
    };
    BlockNumber: string;
};
export default _default;
