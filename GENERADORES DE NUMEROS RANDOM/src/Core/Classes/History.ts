import IHistory, { HistoryRow } from "../Interfaces/IHistory";

class History implements IHistory {
  iterations: Array<HistoryRow>;

  constructor() {
    this.iterations = [];
  }
}

export default History;
