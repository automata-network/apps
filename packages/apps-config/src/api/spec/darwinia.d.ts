declare const _default: {
    Address: string;
    LookupSource: string;
    BalanceInfo: string;
    BalanceLock: {
        id: string;
        lockFor: string;
        LockReasons: string;
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
        stakingAmount: string;
        unbondings: string;
    };
    Reasons: {
        _enum: string[];
    };
    Unbonding: {
        amount: string;
        moment: string;
    };
    AccountData: {
        free: string;
        reserved: string;
        freeKton: string;
        reservedKton: string;
        miscFrozen: string;
        feeFrozen: string;
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
        activeRing: string;
        activeDepositRing: string;
        activeKton: string;
        depositItems: string;
        ringStakingLock: string;
        ktonStakingLock: string;
        claimedRewards: string;
        total: string;
        active: string;
        unlocking: string;
    };
    TimeDepositItem: {
        value: string;
        startTime: string;
        expireTime: string;
    };
    ExposureT: {
        ownRingBalance: string;
        ownKtonBalance: string;
        ownPower: string;
        totalPower: string;
        others: string;
    };
    Exposure: string;
    IndividualExposure: {
        who: string;
        ringBalance: string;
        ktonBalance: string;
        power: string;
    };
    ElectionResultT: {
        electedStashes: string;
        exposures: string;
        compute: string;
    };
    RKT: {
        r: string;
        k: string;
    };
    SpanRecord: {
        slashed: string;
        paidOut: string;
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
        ringValue: string;
        ktonValue: string;
        ringBond: string;
        ktonBond: string;
    };
    MappedRing: string;
    EthereumTransactionIndex: string;
    EthereumBlockNumber: string;
    EthereumHeader: {
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
    EthereumAddress: string;
    Bloom: string;
    H128: string;
    EthashProof: {
        dagNodes: string;
        proof: string;
    };
    EthereumReceipt: {
        gasUsed: string;
        logBloom: string;
        logs: string;
        outcome: string;
    };
    LogEntry: {};
    TransactionOutcome: {};
    EthereumNetworkType: {
        _enum: {
            Mainnet: null;
            Ropsten: null;
        };
    };
    RedeemFor: {
        _enum: {
            Token: null;
            Deposit: null;
        };
    };
    EthereumReceiptProof: {
        index: string;
        proof: string;
        headerHash: string;
    };
    EthereumReceiptProofThing: string;
    MMRProof: {
        memberLeafIndex: string;
        lastLeafIndex: string;
        proof: string;
    };
    EthereumRelayHeaderParcel: {
        header: string;
        mmrRoot: string;
    };
    EthereumRelayProofs: {
        ethashProof: string;
        mmrProof: string;
    };
    OtherSignature: {
        _enum: {
            Eth: string;
            Tron: string;
        };
    };
    EcdsaSignature: string;
    TronAddress: string;
    OtherAddress: {
        _enum: {
            Eth: string;
            Tron: string;
        };
    };
    AddressT: string;
    MerkleMountainRangeRootLog: {
        prefix: string;
        mmrRoot: string;
    };
    AccountInfo: {
        nonce: string;
        refcount: string;
        data: string;
    };
    ProxyDefinition: {
        delegate: string;
        proxyType: string;
        delay: string;
    };
    ProxyType: {
        _enum: {
            Any: null;
            NonTransfer: null;
            Governance: null;
            Staking: null;
            IdentityJudgement: null;
            EthereumBridge: null;
        };
    };
    ProxyAnnouncement: {
        real: string;
        callHash: string;
        height: string;
    };
    Announcement: string;
    RelayHeaderId: string;
    RelayHeaderParcel: string;
    RelayProofs: string;
    RelayAffirmationId: {
        relayHeaderId: string;
        round: string;
        index: string;
    };
    RelayAffirmationT: {
        relayer: string;
        relayHeaderParcels: string;
        bond: string;
        maybeExtendedRelayAffirmationId: string;
        verified: string;
    };
    RelayVotingState: {
        ayes: string;
        nays: string;
    };
    PowerOf: {
        power: string;
    };
};
export default _default;
