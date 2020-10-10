interface CombinedLineal {
    randomList: number[];
    kValue: number;
    modulo: number;

    validate?(): number;
}

export default CombinedLineal;