import React, { useState, useCallback } from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import useStyles from "./ValidationStyles";
import Multiplicative from "../../../Core/Classes/Multiplicative";
import SquaredChi from "../../../Core/Classes/SquaredChi";

interface PassOrFailProps {
  multiplierA: number;
  modulus: number;
  seed: number;
  iterations: number;
}

const SquaeedChi: React.FC<PassOrFailProps> = ({
  multiplierA,
  modulus,
  seed,
  iterations,
}) => {
  const classes = useStyles();
  const generator = new Multiplicative(multiplierA, modulus, seed, iterations);
  generator.generate();

  const [alpha, setAlpha] = useState(0.1);
  const [test, setTest] = useState(new SquaredChi(generator.seen, alpha));

  const handleChange = (event: any) => {
    setAlpha(event.target.value);
    setTest(new SquaredChi(generator.ri, alpha));
  };

  return (
    <Card className={classes.cards}>
      <Grid container spacing={1}>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.section2}
          >
            Chi-Cuadrada
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.section2}
          >
            {test.test()}
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <InputLabel id="demo-simple-select-outlined-label">ALPHA</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={alpha}
            onChange={handleChange}
          >
            <MenuItem value={0.1}>0.1</MenuItem>
            <MenuItem value={0.05}>0.05</MenuItem>
            <MenuItem value={0.025}>0.025</MenuItem>
            <MenuItem value={0.01}>0.01</MenuItem>
            <MenuItem value={0.005}>0.005</MenuItem>
            <MenuItem value={0.001}>0.001</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SquaeedChi;
