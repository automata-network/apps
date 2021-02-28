declare const _default: {
    Crab: {
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
            ParentMmrRoot: string;
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
        Signer: string;
        RelayAuthorityT: {
            accountId: string;
            signer: string;
            stake: string;
            term: string;
        };
        MMRRoot: string;
        EcdsaAddress: string;
        EcdsaMessage: string;
        RelayAuthoritySigner: string;
        RelayAuthorityMessage: string;
        RelayAuthoritySignature: string;
        Term: string;
    };
    Darwinia: {
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
    Equilibrium: {
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
    'ares-parachain': {
        Address: string;
        LookupSource: string;
    };
    bifrost: {
        Token: {
            symbol: string;
            precision: string;
            totalSupply: string;
        };
        VersionId: string;
        Action: {
            account: string;
            name: string;
            authorization: string;
            data: string;
        };
        IostAction: {
            contract: string;
            action_name: string;
            data: string;
        };
        PermissionLevel: {
            actor: string;
            permission: string;
        };
        PermissionName: string;
        ActionReceipt: {
            receiver: string;
            act_digest: string;
            global_sequence: string;
            recv_sequence: string;
            auth_sequence: string;
            code_sequence: string;
            abi_sequence: string;
        };
        Checksum256: string;
        BlockchainType: {
            _enum: string[];
        };
        Precision: string;
        BridgeAssetSymbol: {
            blockchain: string;
            symbol: string;
            precision: string;
        };
        ProducerSchedule: {
            version: string;
            producers: string;
        };
        ProducerKey: {
            producer_name: string;
            block_signing_key: string;
        };
        AccountName: string;
        ActionName: string;
        PublicKey: {
            type_: string;
            data: string;
        };
        UnsignedInt: string;
        Signature: {
            type_: string;
            data: string;
        };
        SignedBlockHeader: {
            block_header: string;
            producer_signature: string;
        };
        BlockHeader: {
            timestamp: string;
            producer: string;
            confirmed: string;
            previous: string;
            transaction_mroot: string;
            action_mroot: string;
            schedule_version: string;
            new_producers: string;
            header_extensions: string;
        };
        BlockTimestamp: string;
        Extension: string;
        IncrementalMerkle: {
            _node_count: string;
            _active_nodes: string;
        };
        Checksum256Array: string;
        FlatMap: {
            map: string;
        };
        TxSig: {
            signature: string;
            author: string;
        };
        MultiSig: {
            signatures: string;
            threshold: string;
        };
        MultiSigTx: {
            chain_id: string;
            raw_tx: string;
            multi_sig: string;
            action: string;
            from: string;
            token_symbol: string;
        };
        Sent: {
            tx_id: string;
            from: string;
            token_symbol: string;
        };
        Succeeded: {
            tx_id: string;
        };
        Failed: {
            tx_id: string;
            reason: string;
        };
        TxOut: {
            _enum: {
                Initialized: string;
                Created: string;
                SignComplete: string;
                Sent: string;
                Succeeded: string;
                Failed: string;
            };
        };
        RewardRecord: {
            account_id: string;
            record_amount: string;
        };
        ConvertPrice: string;
        RatePerBlock: string;
        Fee: string;
        PoolId: string;
        Nonce: string;
        PoolDetails: {
            owner: string;
            swap_fee_rate: string;
            active: string;
        };
        PoolCreateTokenDetails: {
            token_id: string;
            token_balance: string;
            token_weight: string;
        };
        TokenPool: string;
        VTokenPool: string;
        InVariantPool: string;
        TokenSymbol: {
            _enum: string[];
        };
        TransactionStatus: {
            _enum: string[];
        };
        Cost: string;
        Income: string;
        Price: string;
        AccountAsset: {
            balance: string;
            locked: string;
            available: string;
            cost: string;
            income: string;
        };
        SpecIndex: string;
        RequestIdentifier: string;
        DataVersion: string;
        ConvertPool: {
            token_pool: string;
            vtoken_pool: string;
            current_reward: string;
            pending_reward: string;
        };
        ProducerAuthoritySchedule: {
            version: string;
            producers: string;
        };
        ProducerAuthority: {
            producer_name: string;
            authority: string;
        };
        BlockSigningAuthority: string;
        BlockSigningAuthorityV0: {
            threshold: string;
            keys: string;
        };
        KeyWeight: {
            key: string;
            weight: string;
        };
        InvariantValue: string;
        PoolWeight: string;
        AssetConfig: {
            redeem_duration: string;
            min_reward_per_block: string;
        };
        ProxyValidatorRegister: {
            last_block: string;
            deposit: string;
            need: string;
            staking: string;
            reward_per_block: string;
            validator_address: string;
        };
        BlockNumber: string;
    };
    'bitcountry-node': {
        Address: string;
        LookupSource: string;
        Balance: string;
        AssetId: string;
        BlockNumber: string;
        AssetInfo: {
            owner: string;
            data: string;
        };
        AssetData: {
            name: string;
            description: string;
            properties: string;
            supporters: string;
        };
        AuctionId: string;
        AuctionItem: {
            asset_id: string;
            recipient: string;
            initial_amount: string;
            amount: string;
            start_time: string;
            ed_time: string;
        };
        AuctionInfo: {
            bid: string;
            start: string;
            end: string;
        };
        RentId: string;
        RentalInfo: {
            owner: string;
            start: string;
            end: string;
            price_per_block: string;
        };
        CountryId: string;
        CollectionId: string;
        CurrencyId: string;
        TokenId: string;
        CurrencyIdOf: string;
        BalanceIdOf: string;
    };
    canvas: {
        Address: string;
        LookupSource: string;
        Schedule: string;
    };
    'centrifuge-chain': {
        AnchorData: {
            id: string;
            docRoot: string;
            anchoredBlock: string;
        };
        Fee: {
            key: string;
            price: string;
        };
        PreCommitData: {
            signingRoot: string;
            identity: string;
            expirationBlock: string;
        };
        Proof: {
            leafHash: string;
            sortedHashes: string;
        };
        MultiAccountData: {
            threshold: string;
            signatories: string;
            deposit: string;
            depositor: string;
        };
        ChainId: string;
        ResourceId: string;
        'chainbridge::ChainId': string;
        DepositNonce: string;
        RegistryId: string;
        TokenId: string;
        AssetId: {
            registryId: string;
            tokenId: string;
        };
        RegistryInfo: {
            ownerCanBurn: string;
            fields: string;
        };
        AssetInfo: {
            metadata: string;
        };
        ProofMint: {
            value: string;
            property: string;
            salt: string;
            hashes: string;
        };
        MintInfo: {
            anchorId: string;
            staticHashes: string;
            proofs: string;
        };
    };
    chainx: {
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
    clover: {
        Amount: string;
        Keys: string;
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
    'clover-rococo': {
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
    crust: {
        Address: string;
        AddressInfo: string;
        ETHAddress: string;
        EthereumTxHash: string;
        FileAlias: string;
        FileInfo: {
            file_size: string;
            expired_on: string;
            claimed_at: string;
            amount: string;
            expected_replica_count: string;
            reported_replica_count: string;
            replicas: string;
        };
        Guarantee: {
            targets: string;
            total: string;
            submitted_in: string;
            suppressed: string;
        };
        IASSig: string;
        Identity: {
            anchor: string;
            punishment_deadline: string;
            group: string;
        };
        ISVBody: string;
        LookupSource: string;
        MerchantLedger: {
            reward: string;
            pledge: string;
        };
        MerkleRoot: string;
        ReportSlot: string;
        Replica: {
            who: string;
            valid_at: string;
            anchor: string;
            is_reported: string;
        };
        PKInfo: {
            code: string;
            anchor: string;
        };
        Status: {
            _enum: string[];
        };
        SworkerAnchor: string;
        SworkerCert: string;
        SworkerCode: string;
        SworkerPubKey: string;
        SworkerSignature: string;
        UsedInfo: {
            used_size: string;
            reported_group_count: string;
            groups: string;
        };
        WorkReport: {
            report_slot: string;
            used: string;
            free: string;
            reported_files_size: string;
            reported_srd_root: string;
            reported_files_root: string;
        };
    };
    'crust-parachain': {
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
    'cumulus-test-parachain': {
        Address: string;
        LookupSource: string;
        RefCount: string;
    };
    'darwinia-parachain': {
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
    'datahighway-parachain': {
        Address: string;
        LookupSource: string;
    };
    'dock-main-runtime': {
        Address: string;
        LookupSource: string;
        Keys: string;
        Did: string;
        Bytes32: {
            value: string;
        };
        Bytes33: {
            value: string;
        };
        Bytes64: {
            value: string;
        };
        Bytes65: {
            value: string;
        };
        PublicKey: {
            _enum: {
                Sr25519: string;
                Ed25519: string;
                Secp256k1: string;
            };
        };
        DidSignature: {
            _enum: {
                Sr25519: string;
                Ed25519: string;
                Secp256k1: string;
            };
        };
        KeyDetail: {
            controller: string;
            public_key: string;
        };
        KeyUpdate: {
            did: string;
            public_key: string;
            controller: string;
            last_modified_in_block: string;
        };
        DidRemoval: {
            did: string;
            last_modified_in_block: string;
        };
        RegistryId: string;
        RevokeId: string;
        Registry: {
            policy: string;
            add_only: string;
        };
        Revoke: {
            registry_id: string;
            revoke_ids: string;
            last_modified: string;
        };
        UnRevoke: {
            registry_id: string;
            revoke_ids: string;
            last_modified: string;
        };
        RemoveRegistry: {
            registry_id: string;
            last_modified: string;
        };
        PAuth: string;
        Policy: {
            _enum: {
                OneOf: string;
            };
        };
        BlobId: string;
        Blob: {
            id: string;
            blob: string;
            author: string;
        };
        EpochNo: string;
        EpochLen: string;
        SlotNo: string;
        Balance: string;
        EpochDetail: {
            validator_count: string;
            starting_slot: string;
            expected_ending_slot: string;
            ending_slot: string;
            total_emission: string;
            emission_for_treasury: string;
            emission_for_validators: string;
        };
        ValidatorStatsPerEpoch: {
            block_count: string;
            locked_reward: string;
            unlocked_reward: string;
        };
        Payload: {
            proposal: string;
            round_no: string;
        };
        Membership: {
            members: string;
            vote_requirement: string;
        };
        PMAuth: string;
        Bonus: {
            swap_bonuses: string;
            vesting_bonuses: string;
        };
        StateChange: {
            _enum: {
                KeyUpdate: string;
                DidRemoval: string;
                Revoke: string;
                UnRevoke: string;
                RemoveRegistry: string;
                Blob: string;
                MasterVote: string;
            };
        };
    };
    'dock-testnet': {
        Address: string;
        LookupSource: string;
        Keys: string;
        Did: string;
        Bytes32: {
            value: string;
        };
        Bytes33: {
            value: string;
        };
        Bytes64: {
            value: string;
        };
        Bytes65: {
            value: string;
        };
        PublicKey: {
            _enum: {
                Sr25519: string;
                Ed25519: string;
                Secp256k1: string;
            };
        };
        DidSignature: {
            _enum: {
                Sr25519: string;
                Ed25519: string;
                Secp256k1: string;
            };
        };
        KeyDetail: {
            controller: string;
            public_key: string;
        };
        KeyUpdate: {
            did: string;
            public_key: string;
            controller: string;
            last_modified_in_block: string;
        };
        DidRemoval: {
            did: string;
            last_modified_in_block: string;
        };
        RegistryId: string;
        RevokeId: string;
        Registry: {
            policy: string;
            add_only: string;
        };
        Revoke: {
            registry_id: string;
            revoke_ids: string;
            last_modified: string;
        };
        UnRevoke: {
            registry_id: string;
            revoke_ids: string;
            last_modified: string;
        };
        RemoveRegistry: {
            registry_id: string;
            last_modified: string;
        };
        PAuth: string;
        Policy: {
            _enum: {
                OneOf: string;
            };
        };
        BlobId: string;
        Blob: {
            id: string;
            blob: string;
            author: string;
        };
        EpochNo: string;
        EpochLen: string;
        SlotNo: string;
        Balance: string;
        EpochDetail: {
            validator_count: string;
            starting_slot: string;
            expected_ending_slot: string;
            ending_slot: string;
            total_emission: string;
            emission_for_treasury: string;
            emission_for_validators: string;
        };
        ValidatorStatsPerEpoch: {
            block_count: string;
            locked_reward: string;
            unlocked_reward: string;
        };
        Payload: {
            proposal: string;
            round_no: string;
        };
        Membership: {
            members: string;
            vote_requirement: string;
        };
        PMAuth: string;
        Bonus: {
            swap_bonuses: string;
            vesting_bonuses: string;
        };
        StateChange: {
            _enum: {
                KeyUpdate: string;
                DidRemoval: string;
                Revoke: string;
                UnRevoke: string;
                RemoveRegistry: string;
                Blob: string;
                MasterVote: string;
            };
        };
    };
    dusty3: {
        AuthorityId: string;
        AuthorityVote: string;
        ChallengeGameOf: {
            challenges: string;
            createdBlock: string;
            decision: string;
            propertyHash: string;
        };
        Claim: {
            amount: string;
            approve: string;
            complete: string;
            decline: string;
            params: string;
        };
        ClaimId: string;
        ClaimVote: {
            approve: string;
            authority: string;
            claim_id: string;
        };
        Decision: {
            _enum: string[];
        };
        DollarRate: string;
        EraIndex: string;
        EraStakingPoints: {
            individual: string;
            total: string;
        };
        Keys: string;
        Lockdrop: {
            duration: string;
            public_key: string;
            transaction_hash: string;
            type: string;
            value: string;
        };
        Parameters: {
            canBeNominated: string;
            optionExpired: string;
            optionP: string;
        };
        PredicateContractOf: {
            inputs: string;
            predicateHash: string;
        };
        PredicateHash: string;
        PrefabOvmModule: {
            code: string;
            scheduleVersion: string;
        };
        Property: {
            inputs: string;
            predicateAddress: string;
        };
        PropertyOf: {
            inputs: string;
            predicateAddress: string;
        };
        Schedule: {
            putCodePerByteCost: string;
            version: string;
        };
        StakingParameters: {
            canBeNominated: string;
            optionExpired: string;
            optionP: string;
        };
        TickerRate: {
            authority: string;
            btc: string;
            eth: string;
        };
        VoteCounts: {
            bad: string;
            good: string;
        };
    };
    'encointer-node-notee': {
        Address: string;
        LookupSource: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        ParticipantIndexType: string;
        MeetupIndexType: string;
        AttestationIndexType: string;
        CurrencyIdentifier: string;
        BalanceType: string;
        BalanceEntry: {
            principal: string;
            last_update: string;
        };
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        Reputation: {
            _enum: string[];
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ClaimOfAttendance: {
            claimant_public: string;
            ceremony_index: string;
            currency_identifier: string;
            meetup_index: string;
            location: string;
            timestamp: string;
            number_of_participants_confirmed: string;
        };
        Attestation: {
            claim: string;
            signature: string;
            public: string;
        };
        ProofOfAttendance: {
            prover_public: string;
            ceremony_index: string;
            currency_identifier: string;
            attendee_public: string;
            attendee_signature: string;
        };
        ShopIdentifier: string;
        ArticleIdentifier: string;
    };
    'encointer-node-teeproxy': {
        Address: string;
        LookupSource: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        CurrencyIdentifier: string;
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ShardIdentifier: string;
        Request: {
            shard: string;
            cyphertext: string;
        };
        Enclave: {
            pubkey: string;
            mrenclave: string;
            timestamp: string;
            url: string;
        };
    };
    'encointer-parachain': {
        Address: string;
        LookupSource: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        ParticipantIndexType: string;
        MeetupIndexType: string;
        AttestationIndexType: string;
        CurrencyIdentifier: string;
        BalanceType: string;
        BalanceEntry: {
            principal: string;
            last_update: string;
        };
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        Reputation: {
            _enum: string[];
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ClaimOfAttendance: {
            claimant_public: string;
            ceremony_index: string;
            currency_identifier: string;
            meetup_index: string;
            location: string;
            timestamp: string;
            number_of_participants_confirmed: string;
        };
        Attestation: {
            claim: string;
            signature: string;
            public: string;
        };
        ProofOfAttendance: {
            prover_public: string;
            ceremony_index: string;
            currency_identifier: string;
            attendee_public: string;
            attendee_signature: string;
        };
        ShopIdentifier: string;
        ArticleIdentifier: string;
    };
    'hack-hydra-dx': {
        Amount: string;
        AmountOf: string;
        Address: string;
        BalanceInfo: {
            amount: string;
            assetId: string;
        };
        CurrencyId: string;
        CurrencyIdOf: string;
        Intention: {
            who: string;
            asset_sell: string;
            asset_buy: string;
            amount: string;
            discount: string;
            sell_or_buy: string;
        };
        IntentionId: string;
        IntentionType: {
            _enum: string[];
        };
        LookupSource: string;
        Price: string;
    };
    hanonycash: {
        Difficulty: string;
        DifficultyAndTimestamp: {
            difficulty: string;
            timestamp: string;
        };
        Era: {
            genesisBlockHash: string;
            finalBlockHash: string;
            finalStateRoot: string;
        };
        RefCount: string;
    };
    idavoll: {
        Address: string;
        LookupSource: string;
    };
    'integritee-parachain': {
        Address: string;
        Enclave: {
            mrenclave: string;
            pubkey: string;
            timestamp: string;
            url: string;
        };
        LookupSource: string;
        Request: {
            cyphertext: string;
            shard: string;
        };
        ShardIdentifier: string;
    };
    jupiter: {
        Address: string;
        LookupSource: string;
    };
    'kilt-parachain': {
        Address: string;
        BlockNumber: string;
        DelegationNodeId: string;
        ErrorCode: string;
        Index: string;
        LookupSource: string;
        Permissions: string;
        PublicBoxKey: string;
        PublicSigningKey: string;
        RefCount: string;
        Signature: string;
    };
    'mashnet-node': {
        Address: string;
        BlockNumber: string;
        DelegationNodeId: string;
        ErrorCode: string;
        Index: string;
        LookupSource: string;
        Permissions: string;
        PublicBoxKey: string;
        PublicSigningKey: string;
        RefCount: string;
        Signature: string;
    };
    'node-polkadex': {
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
    'nodle-chain': {
        Amendment: string;
        Application: {
            candidate: string;
            candidate_deposit: string;
            challenged_block: string;
            challenger: string;
            challenger_deposit: string;
            created_block: string;
            metadata: string;
            voters_against: string;
            voters_for: string;
            votes_against: string;
            votes_for: string;
        };
        CertificateId: string;
        RefCount: string;
        RootCertificate: {
            child_revocations: string;
            created: string;
            key: string;
            owner: string;
            renewed: string;
            revoked: string;
            validity: string;
        };
    };
    'phala-collator': {
        Address: string;
        LookupSource: string;
        EthereumAddress: string;
        EcdsaSignature: string;
        EthereumTxHash: string;
        WorkerStateEnum: {
            _enum: {
                Empty: null;
                Free: null;
                Gatekeeper: null;
                MiningPending: null;
                Mining: string;
                MiningStopping: null;
            };
        };
        WorkerInfo: {
            machineId: string;
            pubkey: string;
            lastUpdated: string;
            state: string;
            score: string;
        };
        Score: {
            overallScore: string;
            features: string;
        };
        StashInfo: {
            controller: string;
            payoutPrefs: string;
        };
        PayoutPrefs: {
            commission: string;
            target: string;
        };
        BlockRewardInfo: {
            seed: string;
            onlineTarget: string;
            computeTarget: string;
        };
        RoundInfo: {
            round: string;
            startBlock: string;
        };
        RoundStats: {
            round: string;
            onlineWorkers: string;
            computeWorkers: string;
            fracTargetOnlineReward: string;
            totalPower: string;
        };
        MinerStatsDelta: {
            numWorker: string;
            numPower: string;
        };
    };
    'phala-node': {
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
    plasm: {
        AuthorityId: string;
        AuthorityVote: string;
        Claim: {
            amount: string;
            approve: string;
            complete: string;
            decline: string;
            params: string;
        };
        ClaimId: string;
        ClaimVote: {
            approve: string;
            authority: string;
            claim_id: string;
        };
        DollarRate: string;
        Keys: string;
        Lockdrop: {
            duration: string;
            public_key: string;
            transaction_hash: string;
            type: string;
            value: string;
        };
        PredicateHash: string;
        RefCount: string;
        TickerRate: {
            authority: string;
            btc: string;
            eth: string;
        };
    };
    'plasm-parachain': {
        Address: string;
        LookupSource: string;
    };
    robonomics: {
        Record: string;
        TechnicalParam: string;
        TechnicalReport: string;
        EconomicalParam: string;
        ProofParam: string;
        LiabilityIndex: string;
        ValidationFunctionParams: {
            max_code_size: string;
            relay_chain_height: string;
            code_upgrade_allowed: string;
        };
    };
    'stable-poc': {
        Address: string;
        LookupSource: string;
        RefCount: string;
        AccountData: {
            free: string;
            reserved: string;
            miscFrozen: string;
            feeFrozen: string;
            txCount: string;
            sessionIndex: string;
        };
        TemplateAccountData: {
            txCount: string;
            sessionIndex: string;
        };
        TxCount: string;
        Value: string;
        UtxoHash: string;
        AccountHash: string;
        TxHash: string;
        TransactionOutput: {
            value: string;
            pubkey: string;
        };
        SignedPair: {
            input: string;
            output: string;
        };
        ArchivedTransaction: string;
        ArchivedPair: {
            inputs: string;
            outputs: string;
        };
    };
    stable_poc: {
        Address: string;
        LookupSource: string;
        RefCount: string;
        AccountData: {
            free: string;
            reserved: string;
            miscFrozen: string;
            feeFrozen: string;
            txCount: string;
            sessionIndex: string;
        };
        TemplateAccountData: {
            txCount: string;
            sessionIndex: string;
        };
        TxCount: string;
        Value: string;
        UtxoHash: string;
        AccountHash: string;
        TxHash: string;
        TransactionOutput: {
            value: string;
            pubkey: string;
        };
        SignedPair: {
            input: string;
            output: string;
        };
        ArchivedTransaction: string;
        ArchivedPair: {
            inputs: string;
            outputs: string;
        };
    };
    stafi: {
        Address: string;
        LookupSource: string;
        RefCount: string;
    };
    subdao: {};
    subsocial: Record<string, any>;
    subzero: {
        Address: string;
        LookupSource: string;
        Campaign: {
            id: string;
            manager: string;
            deposit: string;
            expiry: string;
            cap: string;
            name: string;
            protocol: string;
            status: string;
        };
        EventMessage: string;
        Nonce: string;
    };
    automata: {
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
    ternoa: {
        Address: string;
        CapsuleID: string;
        CapsuleIDOf: string;
        CapsuleData: {
            offchain_uri: string;
            pk_hash: string;
            creator: string;
            owner: string;
            locked: string;
        };
        LookupSource: string;
    };
    uniarts: {
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
    zenlink: {
        Address: string;
        AccountInfo: string;
        AssetId: {
            _enum: {
                NativeCurrency: null;
                ParaCurrency: string;
            };
        };
        LookupSource: string;
        Pair: {
            token_0: string;
            token_1: string;
            account: string;
            total_liquidity: string;
        };
        PairId: string;
        PairInfo: {
            token_0: string;
            token_1: string;
            account: string;
            total_liquidity: string;
            holding_liquidity: string;
            reserve_0: string;
            reserve_1: string;
        };
        RefCount: string;
        TokenBalance: string;
    };
};
export default _default;
