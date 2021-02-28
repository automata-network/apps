declare const _default: {
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
export default _default;
