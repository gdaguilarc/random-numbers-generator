class FitTest {
    seen: number[];
    alpha: number;
    table: number[][]
  
    constructor(seen: number[], alpha: number = 0.05) {
      this.seen = seen;
      this.alpha = alpha;
      this.table = []
    }
  }
  
  export default FitTest;