interface LinearCongruential {
  multiplierA: number;
  incrementC?: number;
  modulus: number;

  validate?(): number;
}

export default LinearCongruential;
