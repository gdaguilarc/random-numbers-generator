import Generator from "./Generator";
import RandomGenerator from "../Interfaces/RandomGenerator";
import History from "./History";
import { HistoryRow } from "../Interfaces/IHistory";

class MidSquare extends Generator implements RandomGenerator {
  seen: number[];

  constructor(seed: number = 2372, iterations: number = 20) {
    super(seed, iterations);
    this.seen = [];
  }
  generate(): number {
    const seen: Set<number> = new Set();
    const fullLength: number = 8;

    let ans: number = this.seed;
    let counter: number = 0;

    while (counter < this.iterations && !seen.has(ans)) {
      counter += 1;
      seen.add(ans);
      ans = parseInt(
        (ans * ans).toString().padStart(fullLength, "0").substring(2, 6)
      );
    }

    this.seen = Array.from(seen);
    return ans;
  }

  history(): Array<HistoryRow> {
    const history: History = new History();
    const seen: Set<number> = new Set();
    const fullLength: number = 8;

    let ans: number = this.seed;
    let counter: number = 0;

    while (counter < this.iterations && !seen.has(ans)) {
      counter += 1;

      const nextNumber: number = parseInt(
        (ans * ans).toString().padStart(fullLength, "0").substring(2, 6)
      );

      const tmp: HistoryRow = {
        seed: ans,
        squared: ans * ans,
        res: nextNumber,
      };

      history.iterations.push(tmp);

      seen.add(ans);
      ans = nextNumber;
    }

    return history.iterations;
  }
}

export default MidSquare;
