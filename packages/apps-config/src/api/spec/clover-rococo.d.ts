declare const cloverRococoTypes: {
    Amount: string;
    AmountOf: string;
    Balance: string;
    CurrencyId: {
        _enum: string[];
    };
    CurrencyIdOf: string;
    CurrencyTypeEnum: {
        _enum: string[];
    };
    PairKey: string;
    Rate: string;
    Ratio: string;
    Price: string;
    Share: string;
    OracleKey: string;
    CurrencyInfo: {
        id: string;
        name: string;
    };
    ExchangeInfo: {
        balance: string;
        routes: string;
    };
    PoolId: {
        _enum: {
            Swap: string;
        };
    };
    EcdsaSignature: string;
    EvmAddress: string;
    ExitSucceed: {
        _enum: string[];
    };
    ExitRevert: {
        _enum: string[];
    };
    ExitError: {
        _enum: string[];
    };
    ExitFatal: {
        _enum: string[];
    };
    ExitReason: {
        _enum: string[];
    };
};
export default cloverRococoTypes;
