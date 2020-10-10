import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface HistoryRowProps {
  seed: number;
  generated?: number;
  res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({ seed, generated, res }) => {
  return (
    <TableRow key={seed}>
      {generated || res ? (
        <>
          <TableCell component="th" scope="row">
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
