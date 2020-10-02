interface RandomGenerator {
  seed: number;
  iterations: number;
  generate(): number;
}

export default RandomGenerator;
