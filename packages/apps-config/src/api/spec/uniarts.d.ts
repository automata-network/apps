declare const _default: {
    Keys: string;
    Address: string;
    LookupSource: string;
    WorkId: string;
    Id: string;
    Name: string;
    Value: string;
    ReasonIndex: string;
    LottoIndex: string;
    LotteryKind: {
        _enum: {
            Routine: string;
            TreasuryFunded: string;
        };
    };
    LottoResult: {
        _enum: {
            Routine: string;
            TreasuryFunded: string;
        };
    };
    Lottery: {
        round: string;
        kind: string;
        jackpot: string;
        next_ticket_id: string;
        players: string;
        tickets: string;
        result: string;
    };
    NameData: {
        value: string;
        owner: string;
        expiration: string;
    };
    Token: {
        hash: string;
        symbol: string;
        total_supply: string;
    };
    OrderType: {
        _enum: string[];
    };
    OrderStatus: {
        _enum: string[];
    };
    TradePair: {
        hash: string;
        base: string;
        quote: string;
        buy_one_price: string;
        sell_one_price: string;
        latest_matched_price: string;
        one_day_trade_volume: string;
        one_day_highest_price: string;
        one_day_lowest_price: string;
    };
    Price: string;
    LimitOrder: {
        hash: string;
        base: string;
        quote: string;
        owner: string;
        price: string;
        sell_amount: string;
        buy_amount: string;
        remained_sell_amount: string;
        remained_buy_amount: string;
        otype: string;
        status: string;
    };
    Trade: {
        hash: string;
        base: string;
        quote: string;
        buyer: string;
        seller: string;
        maker: string;
        taker: string;
        otype: string;
        price: string;
        base_amount: string;
        quote_amount: string;
    };
    OrderLinkedItem: {
        prev: string;
        next: string;
        price: string;
        orders: string;
    };
    CollectionMode: {
        _enum: {
            Invalid: null;
            NFT: string;
            Fungible: string;
            ReFungible: string;
        };
    };
    NftItemType: {
        Collection: string;
        Owner: string;
        Data: string;
        item_hash: string;
    };
    FungibleItemType: {
        Collection: string;
        Owner: string;
        value: string;
    };
    ApprovePermissions: {
        approved: string;
        amount: string;
    };
    AccessMode: {
        _enum: string[];
    };
    SaleOrder: {
        collection_id: string;
        item_id: string;
        value: string;
        owner: string;
        price: string;
    };
    SaleOrderHistory: {
        collection_id: string;
        item_id: string;
        value: string;
        seller: string;
        buyer: string;
        price: string;
        buy_time: string;
    };
    SignatureAuthentication: {
        collection: string;
        item: string;
        names: string;
        names_owner: string;
        sign_time: string;
        memo: string;
        expiration: string;
    };
    Ownership: {
        owner: string;
        fraction: string;
    };
    ReFungibleItemType: {
        Collection: string;
        Owner: string;
        Data: string;
    };
    CollectionType: {
        Owner: string;
        Mode: string;
        Access: string;
        DecimalPoints: string;
        Name: string;
        Description: string;
        TokenPrefix: string;
        CustomDataSize: string;
        OffchainSchema: string;
        Sponsor: string;
        UnconfirmedSponsor: string;
    };
    Auction: {
        id: string;
        collection_id: string;
        item_id: string;
        value: string;
        owner: string;
        start_price: string;
        increment: string;
        current_price: string;
        start_time: string;
        end_time: string;
    };
    BidHistory: {
        auction_id: string;
        bidder: string;
        bid_price: string;
        bid_time: string;
    };
    Pool: {
        id: string;
        account: string;
        acc_rewards_per_share: string;
        last_reward_block: string;
        asset_id: string;
        total_balance: string;
    };
    Staker: {
        amount: string;
        reward: string;
        debt: string;
    };
};
export default _default;
