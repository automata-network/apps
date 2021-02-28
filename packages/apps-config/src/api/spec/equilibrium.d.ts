declare const _default: {
    Address: string;
    Balance: string;
    BalanceOf: string;
    BalancesAggregate: {
        total_issuance: string;
        total_debt: string;
    };
    BlockNumber: string;
    ChainId: string;
    Currency: {
        _enum: string[];
    };
    DataPoint: {
        price: string;
        account_id: string;
        block_number: string;
        timestamp: string;
    };
    DepositNonce: string;
    FixedI64: string;
    Keys: string;
    LookupSource: string;
    OperationRequest: {
        account: string;
        authority_index: string;
        validators_len: string;
        block_num: string;
    };
    PricePayload: string;
    PricePeriod: {
        _enum: string[];
    };
    PricePoint: {
        block_number: string;
        timestamp: string;
        price: string;
        data_points: string;
    };
    ProposalStatus: {
        _enum: string[];
    };
    ProposalVotes: {
        votes_for: string;
        votes_against: string;
        status: string;
        expiry: string;
    };
    ReinitRequest: {
        account: string;
        authority_index: string;
        validators_len: string;
        block_num: string;
    };
    ResourceId: string;
    SignedBalance: {
        _enum: {
            Positive: string;
            Negative: string;
        };
    };
    SubAccType: {
        _enum: string[];
    };
    TotalAggregates: {
        collateral: string;
        debt: string;
    };
    TransferReason: {
        _enum: string[];
    };
    UserGroup: {
        _enum: string[];
    };
    VestingInfo: {
        locked: string;
        perBlock: string;
        startingBlock: string;
    };
};
export default _default;
