import Generator from "./Generator";
import RandomGenerator from "../Interfaces/RandomGenerator";

class MidSquare extends Generator implements RandomGenerator {
  constructor(seed: number = 2372, iterations: number = 20) {
    super(seed, iterations);
  }
  generate(): number {
    const seen: Set<number> = new Set();
    const fullLength: number = 8;

    let ans: number = 0;
    let counter: number = 0;

    while (counter < this.iterations && !seen.has(ans)) {
      counter += 1;
      seen.add(ans);
      ans = parseInt((ans * ans).toString().padStart(fullLength, "0"));
    }

    return ans;
  }
}

export default MidSquare;
