interface Inactives {
    nomsActive?: string[];
    nomsChilled?: string[];
    nomsInactive?: string[];
    nomsOver?: string[];
    nomsWaiting?: string[];
}
export default function useInactives(stashId: string, nominees?: string[]): Inactives;
export {};
