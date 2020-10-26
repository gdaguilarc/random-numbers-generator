import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface HistoryRowProps {
  seed: number;
  squared?: number;
  generated?: number;
  res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({ seed, generated, res , squared}) => {
  return (
    <TableRow key={seed}>
      <TableCell component="th" scope="row">
        {seed}
      </TableCell>
      <TableCell align="right">{generated}</TableCell>
      <TableCell align="right">{res}</TableCell>
      <TableCell align="right">{squared}</TableCell>
    </TableRow>
  );
};

export default HistoryRow;
