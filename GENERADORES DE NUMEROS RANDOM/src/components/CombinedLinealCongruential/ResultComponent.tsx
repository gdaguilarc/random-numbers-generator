import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import useStyles from "./UseStyles";


interface ResultComponentProps {
  answer: number;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ answer }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Typography component="h4" variant="h4">
        Tú Numero es:
      </Typography>
      <Box className={classes.center}>
        <Typography component="h4" variant="h4">
          <DoubleArrowRoundedIcon style={{ fontSize: "20px" }} />
          {answer}
        </Typography>
      </Box>
    </Card>
  );
};

export default ResultComponent;
