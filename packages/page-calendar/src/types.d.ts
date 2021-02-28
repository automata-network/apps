import type BN from 'bn.js';
export declare type EntryType = 'councilElection' | 'councilMotion' | 'democracyDispatch' | 'democracyLaunch' | 'referendumDispatch' | 'referendumVote' | 'scheduler' | 'societyChallenge' | 'societyRotate' | 'stakingEpoch' | 'stakingEra' | 'stakingSlash' | 'treasurySpend';
export interface EntryInfo {
    blockNumber: BN;
    blocks: BN;
    date: Date;
    dateTime: number;
    info: string | BN | null;
    isPending?: boolean;
}
export interface EntryInfoTyped extends EntryInfo {
    type: EntryType;
}
export interface DateState {
    dateMonth: Date;
    dateMonthNext: Date;
    dateSelected: Date;
    days: number[];
    startClass: string;
}
