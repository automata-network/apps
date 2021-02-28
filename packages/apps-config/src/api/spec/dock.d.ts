declare const _default: {
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
export default _default;
