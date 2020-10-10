import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import MixedCongruential from "../../../Core/Classes/MixedCongruential";

import useStyles from "./ValidationStyles";

interface PassOrFailProps {
  multiplierA: number;
  incrementC: number;
  modulus: number;
}

const PassOrFail: React.FC<PassOrFailProps> = ({
  multiplierA,
  incrementC,
  modulus,
}) => {
  const classes = useStyles();
  const generator = new MixedCongruential(
    multiplierA,
    incrementC,
    modulus,
    0,
    0
  );
  const answer = generator.isPeriod();
  return (
    <Card className={classes.cards}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.section2}
          >
            {answer}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PassOrFail;
