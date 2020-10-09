interface IHistory {
  iterations: Array<HistoryRow>;
}

export interface HistoryRow {
  seed: number;
  squared?: number;
  generated?: number;
  res: number;
}

export default IHistory;
