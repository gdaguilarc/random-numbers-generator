import Generator from "./Generator";
import Multiplicative from "../Interfaces/Multiplicative";
import RandomGenerator from "../Interfaces/RandomGenerator";
import { HistoryRow } from "../Interfaces/IHistory";
import History from "./History";

class MultiplicativeMethod
	extends Generator
	implements Multiplicative, RandomGenerator {
	seen: number[];
	multiplierA: number;
	modulus: number;

	constructor(
		multiplierA: number,
		modulus: number,
		seed: number,
		iterations: number
	) {
		super(seed, iterations);
		this.seen = [];
		this.multiplierA = multiplierA;
		this.modulus = modulus;
	}

	generate(): number {
		const seen: Set<number> = new Set();

		let answer: number = this.seed;
		let counter: number = 0;

		while (counter < this.iterations) {
			counter++;
			answer = (this.multiplierA * answer) % this.modulus;
			seen.add(answer);
		}

		this.seen = Array.from(seen);
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
