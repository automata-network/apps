interface Result {
    isMember: boolean;
    members: string[];
}
export declare function useMembers(collective?: 'council' | 'technicalCommittee'): Result;
export {};
