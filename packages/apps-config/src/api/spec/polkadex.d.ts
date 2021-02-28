declare const _default: {
    OrderType: {
        _enum: string[];
    };
    Order: {
        id: string;
        trading_pair: string;
        trader: string;
        price: string;
        quantity: string;
        order_type: string;
    };
    Order4RPC: {
        id: string;
        trading_pair: string;
        trader: string;
        price: string;
        quantity: string;
        order_type: string;
    };
    MarketData: {
        low: string;
        high: string;
        volume: string;
        open: string;
        close: string;
    };
    LinkedPriceLevel: {
        next: string;
        prev: string;
        orders: string;
    };
    LinkedPriceLevelRpc: {
        next: string;
        prev: string;
        orders: string;
    };
    Orderbook: {
        trading_pair: string;
        base_asset_id: string;
        quote_asset_id: string;
        best_bid_price: string;
        best_ask_price: string;
    };
    OrderbookRPC: {
        trading_pair: string;
        base_asset_id: string;
        quote_asset_id: string;
        best_bid_price: string;
        best_ask_price: string;
    };
    FrontendPricelevel: {
        price: string;
        quantity: string;
    };
    OrderbookUpdates: {
        bids: string;
        asks: string;
    };
    LookupSource: string;
    Address: string;
};
export default _default;
