import React from "react";
import { useState, useCallback } from "react";
import { History } from "history";

import AboutComponent from "./About";
import InputComponent from "./Input";
import HistoryList from "./History";
import MultiplicativeMethod from "../../Core/Classes/Multiplicative";

// DESIGN
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import useStyles from "./MultiplicativeStyles";
import SquaredChi from "./SquaredChi";
import Smirnov from "./Smirnov";

interface MultiplicativeScreenProps {
  history: History;
}

const Multiplicative: React.FC<MultiplicativeScreenProps> = ({ history }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [seed, setSeed] = useState(0);
  const [iterations, setIterations] = useState<number>(10);
  const [multiA, setMultiA] = useState(0);
  const [modulus, setModulus] = useState(0);

  const navBack = useCallback(() => {
    history.replace("/");
  }, [history]);

  const handleSeedChange = (event: any) => {
    setError("");
    setSeed(parseInt(event.target.value) || 0);
  };

  const handleMultiChange = (event: any) => {
    setMultiA(parseInt(event.target.value) || 0);
  };

  const handleModulusChange = (event: any) => {
    setModulus(parseInt(event.target.value) || 0);
  };

  const handleItersChange = (event: any) => {
    setIterations(parseInt(event.target.value) || 0);
  };

  const recalculateRandNumber = (
    multiplierA: number,
    modulus: number,
    seed: number,
    iterations: number
  ) => {
    const generator = new MultiplicativeMethod(
      multiplierA,
      modulus,
      seed,
      iterations
    );

    generator.generate();
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.text}>
          <IconButton size="medium" onClick={navBack}>
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
          METODO CONGRUENCIAL MULTIPLICATIVO
        </Typography>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xl={3} lg={3} md={12} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <AboutComponent />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <InputComponent
                    multiplierA={multiA}
                    modulus={modulus}
                    seed={seed}
                    iterations={iterations}
                    handleSeedChange={handleSeedChange}
                    handleMultiChange={handleMultiChange}
                    handleModulusChange={handleModulusChange}
                    handleItersChange={handleItersChange}
                    recalculateRandNumber={recalculateRandNumber}
                    error={error}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <SquaredChi
                    multiplierA={multiA}
                    modulus={modulus}
                    seed={seed}
                    iterations={iterations}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <Smirnov
                    multiplierA={multiA}
                    modulus={modulus}
                    seed={seed}
                    iterations={iterations}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <HistoryList
                    multiplierA={multiA}
                    modulus={modulus}
                    seed={seed}
                    iterations={iterations}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Multiplicative;
