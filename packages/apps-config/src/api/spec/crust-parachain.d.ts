declare const _default: {
    Address: string;
    AddressInfo: string;
    FileAlias: string;
    Guarantee: {
        targets: string;
        total: string;
        submitted_in: string;
        suppressed: string;
    };
    IASSig: string;
    Identity: {
        pub_key: string;
        code: string;
    };
    ISVBody: string;
    LookupSource: string;
    MerchantInfo: {
        address: string;
        storage_price: string;
        file_map: string;
    };
    MerchantPunishment: {
        success: string;
        failed: string;
        value: string;
    };
    MerkleRoot: string;
    OrderStatus: {
        _enum: string[];
    };
    PaymentLedger: {
        total: string;
        paid: string;
        unreserved: string;
    };
    Pledge: {
        total: string;
        used: string;
    };
    ReportSlot: string;
    Releases: {
        _enum: string[];
    };
    Status: {
        _enum: string[];
    };
    StorageOrder: {
        file_identifier: string;
        file_size: string;
        created_on: string;
        completed_on: string;
        expired_on: string;
        provider: string;
        client: string;
        amount: string;
        order_status: string;
    };
    SworkerCert: string;
    SworkerCode: string;
    SworkerPubKey: string;
    SworkerSignature: string;
    WorkReport: {
        block_number: string;
        used: string;
        reserved: string;
        cached_reserved: string;
        files: string;
    };
};
export default _default;
