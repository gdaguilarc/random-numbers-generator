interface ISmirnov{
    seen: number[];
    alpha: number;
    table: number[][]
    test(): string;
}

export default ISmirnov;