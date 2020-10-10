import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface HistoryRowProps {
  index: number;
  seed: number;
  generated?: number;
  res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({
  index,
  seed,
  generated,
  res,
}) => {
  return (
    <TableRow key={seed}>
      {generated || res ? (
        <>
          <TableCell component="th" scope="row" align="right">
            {index}
          </TableCell>
          <TableCell component="th" scope="row" align="right">
            {seed}
          </TableCell>
          <TableCell align="right">{generated}</TableCell>
          <TableCell align="right">{res}</TableCell>
        </>
      ) : (
        <></>
      )}
    </TableRow>
  );
};

export default HistoryRow;
