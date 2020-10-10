import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyles from "./UseStyles";

interface HistoryRowProps {
  seed: number;
  generated?: number;
  res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({ seed, generated, res }) => {
  const classes = useStyles();
  return (
    <TableRow key={seed}>
      <TableCell component="th" scope="row">
        {seed}
      </TableCell>
      <TableCell align="right">{generated}</TableCell>
      <TableCell align="right">{res}</TableCell>
    </TableRow>
  );
};

export default HistoryRow;
