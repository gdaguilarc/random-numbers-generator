import Generator from "./Generator";
import RandomGenerator from "../Interfaces/RandomGenerator";
import { HistoryRow } from "../Interfaces/IHistory";
import ICongruential from "../Interfaces/ICongruential";
import History from "./History";

class MultiplicativeMethod
  extends Generator
  implements ICongruential, RandomGenerator {
  seen: number[];
  multiplierA: number;
  modulus: number;
  ri: number[];

  constructor(
    multiplierA: number,
    modulus: number,
    seed: number,
    iterations: number
  ) {
    super(seed, iterations);
    this.seen = [];
    this.ri = [];
    this.multiplierA = multiplierA;
    this.modulus = modulus;
  }

  generate(): number {
    const seen: Set<number> = new Set();
    const ri: Set<number> = new Set();

    let answer: number = this.seed;
    let counter: number = 0;

    while (counter < this.iterations) {
      counter++;
      answer = (this.multiplierA * answer) % this.modulus;
      ri.add(answer / this.modulus);
      seen.add(answer);
    }

    this.seen = Array.from(seen);
    this.ri = Array.from(ri);
    return answer;
  }

  history(): Array<HistoryRow> {
    const history: History = new History();
    let answer: number = this.seed;
    let counter: number = 0;

    while (counter < this.iterations) {
      counter++;

      const newAnswer = (this.multiplierA * answer) % this.modulus;

      const ri = newAnswer / this.modulus;

      const row: HistoryRow = {
        seed: answer,
        generated: newAnswer,
        res: ri,
      };

      history.iterations.push(row);
      answer = newAnswer;
    }

    return history.iterations;
  }
}

export default MultiplicativeMethod;
