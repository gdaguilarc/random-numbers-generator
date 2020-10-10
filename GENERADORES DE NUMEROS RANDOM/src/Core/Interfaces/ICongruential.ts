interface ICongruential {
  multiplierA: number;
  incrementC?: number;
  modulus: number;

  validate?(): number;
}

export default ICongruential;
