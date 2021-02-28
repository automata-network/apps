declare const _default: {
    Address: string;
    LookupSource: string;
    RefCount: string;
    BalanceLock: {
        id: string;
        lock_for: string;
        lock_reasons: string;
        amount: string;
        reasons: string;
    };
    LockFor: {
        _enum: {
            Common: string;
            Staking: string;
        };
    };
    Common: {
        amount: string;
    };
    StakingLock: {
        staking_amount: string;
        unbondings: string;
    };
    LockReasons: {
        _enum: {
            Fee: null;
            Misc: null;
            All: null;
        };
    };
    Unbonding: {
        amount: string;
        until: string;
    };
    AccountData: {
        free: string;
        reserved: string;
        free_kton: string;
        reserved_kton: string;
        misc_frozen: string;
        fee_frozen: string;
    };
    RingBalance: string;
    KtonBalance: string;
    TsInMs: string;
    Power: string;
    DepositId: string;
    StakingBalanceT: {
        _enum: {
            RingBalance: string;
            KtonBalance: string;
        };
    };
    StakingLedgerT: {
        stash: string;
        active_ring: string;
        active_deposit_ring: string;
        active_kton: string;
        deposit_items: string;
        ring_staking_lock: string;
        kton_staking_lock: string;
        claimed_rewards: string;
        total: string;
        active: string;
        unlocking: string;
    };
    TimeDepositItem: {
        value: string;
        start_time: string;
        expire_time: string;
    };
    RewardDestination: {
        _enum: {
            Staked: string;
            Stash: null;
            Controller: null;
        };
    };
    Staked: {
        promise_month: string;
    };
    ExposureT: {
        own_ring_balance: string;
        own_kton_balance: string;
        own_power: string;
        total_power: string;
        others: string;
        total: string;
        own: string;
    };
    IndividualExposure: {
        who: string;
        ring_balance: string;
        kton_balance: string;
        power: string;
        value: string;
    };
    ElectionResultT: {
        elected_stashes: string;
        exposures: string;
        compute: string;
    };
    RKT: {
        r: string;
        k: string;
    };
    SpanRecord: {
        slashed: string;
        paid_out: string;
    };
    UnappliedSlash: {
        validator: string;
        own: string;
        others: string;
        reporters: string;
        payout: string;
    };
    TreasuryProposal: {
        proposer: string;
        beneficiary: string;
        ring_value: string;
        kton_value: string;
        ring_bond: string;
        kton_bond: string;
        value: string;
        bond: string;
    };
    EthTransactionIndex: string;
    EthHeaderBrief: {
        total_difficulty: string;
        parent_hash: string;
        number: string;
        relayer: string;
    };
    EthBlockNumber: string;
    EthHeaderThing: {
        eth_header: string;
        ethash_proof: string;
        mmr_root: string;
        mmr_proof: string;
    };
    EthHeader: {
        parent_hash: string;
        timestamp: string;
        number: string;
        author: string;
        transactions_root: string;
        uncles_hash: string;
        extra_data: string;
        state_root: string;
        receipts_root: string;
        log_bloom: string;
        gas_used: string;
        gas_limit: string;
        difficulty: string;
        seal: string;
        hash: string;
    };
    EthAddress: string;
    Bloom: string;
    H128: string;
    EthashProof: {
        dag_nodes: string;
        proof: string;
    };
    Receipt: {
        gas_used: string;
        log_bloom: string;
        logs: string;
        outcome: string;
    };
    EthereumNetworkType: {
        _enum: {
            Mainnet: null;
            Ropsten: null;
        };
    };
    RedeemFor: {
        _enum: {
            Ring: null;
            Kton: null;
            Deposit: null;
        };
    };
    EthereumReceiptProof: {
        index: string;
        proof: string;
        header_hash: string;
    };
    MMRProof: string;
    OtherSignature: {
        _enum: {
            Eth: string;
            Tron: string;
        };
    };
    EcdsaSignature: string;
    OtherAddress: {
        _enum: {
            Eth: string;
            Tron: string;
        };
    };
    AddressT: string;
    MerkleMountainRangeRootLog: {
        prefix: string;
        mmr_root: string;
    };
    Round: string;
    TcBlockNumber: string;
    TcHeaderHash: string;
    TcHeaderMMR: string;
    MMRHash: string;
    GameId: string;
    RawHeaderThing: string;
    BalancesRuntimeDispatchInfo: {
        usable_balance: string;
    };
    StakingRuntimeDispatchInfo: {
        power: string;
    };
};
export default _default;
