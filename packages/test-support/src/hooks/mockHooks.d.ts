/// <reference types="bn.js" />
export declare const mockHooks: {
    blockTime: (string | number | import("@polkadot/util/types").Time)[];
    members: {
        isMember: boolean;
        members: string[];
    };
    treasury: {
        burn: import("bn.js");
        spendPeriod: import("bn.js");
        value: import("@polkadot/types/interfaces").Balance;
    };
};
