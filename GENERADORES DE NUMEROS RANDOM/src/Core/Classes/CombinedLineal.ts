import Generator from "./Generator";
import CombinedLineal from "../Interfaces/CombinedLineal";
import RandomGenerator from "../Interfaces/RandomGenerator";
import { HistoryRow } from "../Interfaces/IHistory";
import History from "./History";

class CombinedLinealMethod
    extends Generator
    implements CombinedLineal, RandomGenerator {
    randomList: number[];
    kValue: number;
    modulo: number;

    constructor(
        randomList: number[],
        iterations: number,
        kValue: number,
        modulo: number
    ) {
        super(kValue, iterations);
        this.randomList = randomList;
        this.kValue = kValue;
        this.modulo = modulo
    }

    generate(): number {
        let sum = 0;
        let i = 0;

        this.randomList.forEach(r =>{
            sum += (Math.pow(-1, i)) * r;
            i++;
        });

        if(sum<0) sum = Math.abs((this.modulo + sum));

        return (sum%this.modulo);
    }

    history(): Array<HistoryRow> {
        const history: History = new History();

        let sum = 0;
        let i = 0;

        this.randomList.forEach(r =>{
            sum += (Math.pow(-1, i)) * r;
            i++;
        });

        let gen = sum;

        if(sum<0) sum = Math.abs((this.modulo + sum));

        let res = (sum%this.modulo);

        let r;

        if(res === 0) r = (this.modulo)/(this.modulo + 1)
        else r = res/(this.modulo + 1)


        const row: HistoryRow = {
            seed: this.kValue,
            generated: gen,
            res: (sum%this.modulo),
            squared: r
        }

        history.iterations.push(row);

        return history.iterations;
    }
}

export default CombinedLinealMethod;