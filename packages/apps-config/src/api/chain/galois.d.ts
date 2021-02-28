declare const _default: {
    Address: string;
    LookupSource: string;
    RefCount: string;
    Account: {
        nonce: string;
        balance: string;
    };
    Transaction: {
        nonce: string;
        action: string;
        gas_price: string;
        gas_limit: string;
        value: string;
        input: string;
        signature: string;
    };
    Signature: {
        v: string;
        r: string;
        s: string;
    };
    ExitReason: string;
    AccountServiceEnum: {
        _enum: {
            Nickname: string;
            Ethereum: string;
        };
    };
    MultiAddressDetails: {
        nickname: string;
        ethereum: string;
    };
    Nickname: string;
    Ethereum: string;
    TransferAmountInfo: {
        date: string;
        daily_info: string;
        monthly_info: string;
        yearly_info: string;
    };
    AccountLimit: {
        daily_limit: string;
        monthly_limit: string;
        yearly_limit: string;
    };
};
export default _default;
