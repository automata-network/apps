declare const _default: {
    Address: string;
    LookupSource: string;
    Chain: {
        _enum: string[];
    };
    NetworkType: {
        _enum: string[];
    };
    AssetType: {
        _enum: string[];
    };
    OrderType: {
        _enum: string[];
    };
    Side: {
        _enum: string[];
    };
    LockedType: {
        _enum: string[];
    };
    Memo: string;
    AssetInfo: {
        token: string;
        tokenName: string;
        chain: string;
        decimals: string;
        desc: string;
    };
    TradingPairProfile: {
        id: string;
        currencyPair: string;
        pipDecimals: string;
        tickDecimals: string;
        tradable: string;
    };
    Order: {
        props: string;
        status: string;
        remaining: string;
        executedIndices: string;
        alreadyFilled: string;
        lastUpdateAt: string;
    };
    TradingPairInfo: {
        latestPrice: string;
        lastUpdated: string;
    };
    OrderExecutedInfo: {
        tradingHistoryIdx: string;
        pairId: string;
        price: string;
        maker: string;
        taker: string;
        makerOrderId: string;
        takerOrderId: string;
        turnover: string;
        executedAt: string;
    };
    BtcHeaderInfo: {
        header: string;
        height: string;
    };
    BtcParams: {
        maxBits: string;
        blockMaxFuture: string;
        targetTimespanSeconds: string;
        targetSpacingSeconds: string;
        retargetingFactor: string;
        retargetingInterval: string;
        minTimespan: string;
        maxTimespan: string;
    };
    MiningAssetInfo: {
        assetId: string;
        miningPower: string;
        rewardPot: string;
        rewardPotBalance: string;
        lastTotalMiningWeight: string;
        lastTotalMiningWeightUpdate: string;
    };
    MiningDividendInfo: {
        own: string;
        other: string;
        insufficientStake: string;
    };
    AssetLedger: {
        lastTotalMiningWeight: string;
        lastTotalMiningWeightUpdate: string;
    };
    MinerLedger: {
        lastMiningWeight: string;
        lastMiningWeightUpdate: string;
        lastClaim: string;
    };
    ClaimRestriction: {
        stakingRequirement: string;
        frequencyLimit: string;
    };
    NominatorInfo: {
        lastRebond: string;
    };
    BondRequirement: {
        selfBonded: string;
        total: string;
    };
    Unbonded: {
        value: string;
        lockedUntil: string;
    };
    ValidatorLedger: {
        totalNomination: string;
        lastTotalVoteWeight: string;
        lastTotalVoteWeightUpdate: string;
    };
    NominatorLedger: {
        nomination: string;
        lastVoteWeight: string;
        lastVoteWeightUpdate: string;
        unbondedChunks: string;
    };
    ValidatorProfile: {
        registeredAt: string;
        isChilled: string;
        lastChilled: string;
        referralId: string;
    };
    GlobalDistribution: {
        treasury: string;
        mining: string;
    };
    MiningDistribution: {
        asset: string;
        staking: string;
    };
    InclusionFee: {
        baseFee: string;
        lenFee: string;
        adjustedWeightFee: string;
    };
    FeeDetails: {
        inclusionFee: string;
        extraFee: string;
        tip: string;
        finalFee: string;
    };
    UnbondedIndex: string;
    Token: string;
    Desc: string;
    AddrStr: string;
    HandicapInfo: string;
    Price: string;
    OrderId: string;
    TradingPairId: string;
    TradingHistoryIndex: string;
    PriceFluctuation: string;
    BtcAddress: string;
    FixedAssetPower: string;
    StakingRequirement: string;
    Decimals: string;
    CurrencyPair: {
        base: string;
        quote: string;
    };
    OrderStatus: {
        _enum: string[];
    };
    AssetId: string;
    MiningWeight: string;
    VoteWeight: string;
    ReferralId: string;
    AssetRestriction: {
        _enum: string[];
    };
    AssetRestrictions: {
        bits: string;
    };
    BtcHeader: string;
    BtcNetwork: {
        _enum: string[];
    };
    OrderInfo: string;
    Amount: string;
    AmountOf: string;
    CurrencyIdOf: string;
    CurrencyId: string;
    Handicap: {
        highestBid: string;
        lowestAsk: string;
    };
    OrderProperty: {
        id: string;
        side: string;
        price: string;
        amount: string;
        pairId: string;
        submitter: string;
        orderType: string;
        createdAt: string;
    };
    TotalAssetInfo: {
        info: string;
        balance: string;
        isOnline: string;
        restrictions: string;
    };
    WithdrawalRecordId: string;
    WithdrawalState: {
        _enum: string[];
    };
    WithdrawalRecord: {
        assetId: string;
        applicant: string;
        balance: string;
        addr: string;
        ext: string;
        height: string;
    };
    WithdrawalLimit: {
        minimalWithdrawal: string;
        fee: string;
    };
    TrusteeInfoConfig: {
        minTrusteeCount: string;
        maxTrusteeCount: string;
    };
    GenericTrusteeIntentionProps: {
        about: string;
        hotEntity: string;
        coldEntity: string;
    };
    GenericTrusteeSessionInfo: {
        trusteeList: string;
        threshold: string;
        hotAddress: string;
        coldAddress: string;
    };
    ChainAddress: string;
    BtcTrusteeType: string;
    BtcTrusteeAddrInfo: {
        addr: string;
        redeemScript: string;
    };
    BtcTrusteeIntentionProps: {
        about: string;
        hotEntity: string;
        coldEntity: string;
    };
    BtcTrusteeSessionInfo: {
        trusteeList: string;
        threshold: string;
        hotAddress: string;
        coldAddress: string;
    };
    BtcTransaction: string;
    BtcPartialMerkleTree: string;
    BtcRelayedTxInfo: {
        blockHash: string;
        merkleProof: string;
    };
    BtcHeaderIndex: {
        hash: string;
        height: string;
    };
    BtcTxResult: {
        _enum: string[];
    };
    BtcTxState: {
        txType: string;
        result: string;
    };
    BtcTxType: {
        _enum: string[];
    };
    BtcDepositCache: {
        txid: string;
        balance: string;
    };
    BtcVoteResult: {
        _enum: string[];
    };
    BtcWithdrawalProposal: {
        sigState: string;
        withdrawalIdList: string;
        tx: string;
        trusteeList: string;
    };
    BtcTxVerifier: {
        _enum: string[];
    };
    RpcTotalAssetInfo: {
        info: string;
        balance: string;
        isOnline: string;
        restrictions: string;
    };
    RpcOrder: {
        id: string;
        side: string;
        price: string;
        amount: string;
        pairId: string;
        submitter: string;
        orderType: string;
        createdAt: string;
        status: string;
        remaining: string;
        executedIndices: string;
        alreadyFilled: string;
        reservedBalance: string;
        lastUpdateAt: string;
    };
    RpcWithdrawalRecord: {
        assetId: string;
        applicant: string;
        balance: string;
        addr: string;
        ext: string;
        height: string;
        state: string;
    };
    RpcMiningDividendInfo: {
        own: string;
        other: string;
        insufficientStake: string;
    };
    RpcInclusionFee: {
        baseFee: string;
        lenFee: string;
        adjustedWeightFee: string;
    };
    RpcFeeDetails: {
        inclusionFee: string;
        tip: string;
        extraFee: string;
        finalFee: string;
    };
    ValidatorInfo: {
        account: string;
        registeredAt: string;
        isChilled: string;
        lastChilled: string;
        totalNomination: string;
        lastTotalVoteWeight: string;
        lastTotalVoteWeightUpdate: string;
        isValidating: string;
        selfBonded: string;
        referralId: string;
        rewardPotAccount: string;
        rewardPotBalance: string;
    };
    FullPairInfo: {
        baseCurrency: string;
        highestBid: string;
        id: string;
        latestPrice: string;
        latestPriceUpdatedAt: string;
        lowestAsk: string;
        maxValidBid: string;
        minValidAsk: string;
        pipDecimals: string;
        quoteCurrency: string;
        tickDecimals: string;
        tradable: string;
    };
    Depth: {
        asks: string;
        bids: string;
    };
    Page: {
        pageIndex: string;
        pageSize: string;
        data: string;
    };
    String: string;
    Balance: string;
    RpcPrice: string;
    RpcBalance: string;
    RpcMiningWeight: string;
    RpcVoteWeight: string;
    FullIdentification: string;
    WithdrawalRecordOf: string;
};
export default _default;
