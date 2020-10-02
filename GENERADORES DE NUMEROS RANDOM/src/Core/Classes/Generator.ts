class Generator {
  seed: number;
  iterations: number;

  constructor(seed: number = 2372, iterations: number = 20) {
    this.seed = seed;
    this.iterations = iterations;
  }
}

export default Generator;
