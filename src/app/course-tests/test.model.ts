export interface Test {
    id: number;
    question: string;
    variants: {
        A: string;
        B: string;
        D: string;
        E: string;
    };
    answer: string;
}