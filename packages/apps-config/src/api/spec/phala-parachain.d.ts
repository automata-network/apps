declare const _default: {
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
export default _default;
