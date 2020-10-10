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
    <TableRow key={index + "-" + seed}>
      {generated || res ? (
        <>
          <TableCell component="th" scope="row">
            {index}
          </TableCell>
          <TableCell component="th" scope="row">
            {seed}
          </TableCell>
          <TableCell align="center">{generated}</TableCell>
          <TableCell align="center">{res}</TableCell>
        </>
      ) : (
        <></>
      )}
    </TableRow>
  );
};

export default HistoryRow;
