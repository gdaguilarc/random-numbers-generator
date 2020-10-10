import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface HistoryRowProps {
  index: number;
  seed: number;
  squared?: number;
  res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({
  index,
  seed,
  squared,
  res,
}) => {
  return (
    <TableRow key={index + "-" + seed}>
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell component="th" scope="row">
        {seed}
      </TableCell>
      <TableCell align="right">{squared}</TableCell>
      <TableCell align="right">{res}</TableCell>
    </TableRow>
  );
};

export default HistoryRow;
