declare const _default: {
    Galois: {
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
    'Phala PoC-3': {
        EcdsaSignature: string;
        EthereumAddress: string;
        EthereumTxHash: string;
        MiningInfo: {
            isMining: string;
            startBlock: string;
        };
        PayoutPrefs: {
            commission: string;
            target: string;
        };
        Score: {
            features: string;
            overallScore: string;
        };
        StashInfo: {
            controller: string;
            payoutPrefs: string;
        };
        WorkerInfo: {
            machineId: string;
            pubkey: string;
            lastUpdated: string;
            score: string;
            status: string;
        };
    };
    Automata: {
        DealId: string;
        OrderId: string;
        Attestor: {
            url: string;
            pubkey: string;
            attested_geodes: string;
        };
        PriceType: string;
        AmountType: string;
        OrderPair: {
            first: string;
            second: string;
        };
        OrderType: {
            _enum: string[];
        };
        CancelOrMatch: {
            _enum: string[];
        };
        BidT: {
            nodeid: string;
            price: string;
            sum: string;
            list: string;
        };
        OrderStatus: {
            _enum: string[];
        };
        OrderInfo: {
            who: string;
            ordertype: string;
            pair: string;
            amount: string;
            price: string;
            left: string;
            status: string;
            index: string;
            time: string;
            fill_index: string;
            region: string;
        };
        BidDetailT: {
            id: string;
            pair: string;
            order_type: string;
            user: string;
            price: string;
            amount: string;
            time: string;
        };
        RegionT: {
            id: string;
            name: string;
            admin: string;
            treasure: string;
            taker_rate: string;
            maker_rate: string;
            pairs: string;
        };
        PerMill: string;
        DepthInfo: {
            buy: string;
            sell: string;
        };
        DepthItem: {
            price: string;
            total: string;
        };
        MultiNodeIndex: {
            index: string;
            multi_key: string;
        };
        Node: {
            prev: string;
            next: string;
            data: string;
        };
        NodeIndex: {
            index: string;
        };
        BestHeaderT: {
            number: string;
            hash: string;
        };
        ActionRecord: {
            index: string;
            proof: string;
            header_hash: string;
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
            the_hash: string;
        };
        Bloom: string;
        ChainKind: {
            _enum: string[];
        };
        TokenDetail: {
            uid: string;
            name: string;
            address: string;
            chain: string;
            precision: string;
            extra: string;
            identity: string;
        };
        TokenControl: {
            _enum: string[];
        };
        WithdrawDetail: {
            uid: string;
            actor: string;
            token: string;
            value: string;
            receiver: string;
        };
        DepositDetail: {
            uid: string;
            actor: string;
            token: string;
            value: string;
            receiver: string;
            chain: string;
        };
        PairT: {
            token0: string;
            token1: string;
            address: string;
            totalsupply: string;
            reserve0: string;
            reserve1: string;
            blocktimestamp_last: string;
            price0_cumulative_last: string;
            price1_cumulative_last: string;
            klast: string;
        };
        AuthorInfo: {
            previous: string;
            current: string;
            uid: string;
        };
        WitnessType: {
            _enum: {
                Admin: string;
                Single: string;
            };
        };
        WitnessProposal: {
            message: string;
            signatures: string;
            ty: string;
            finalize: string;
            end: string;
        };
        StatisticsInfo: {
            unreleased: string;
            maximum: string;
        };
    };
};
export default _default;
