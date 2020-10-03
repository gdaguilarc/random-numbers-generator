import React from "react";
import { useState, useCallback } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { History } from "history";

import AboutComponent from "./AboutComponent";
import ResultComponent from "./ResultComponent";
import InputComponent from "./InputComponent";

// DESIGN
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh",
      color: theme.palette.common.white,
      flexFlow: "1",
      padding: theme.spacing(2),
    },
    text: {
      fontFamily: "Montserrat-Bold",
    },
    content: {
      paddingTop: theme.spacing(3),
    },
    cards: {
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      borderRadius: "30px",
    },
    center: {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontFamily: "Montserrat-Bold",
    },
  })
);

interface MidSquareScreenProps {
  history: History;
}

const MidSquareScreen: React.FC<MidSquareScreenProps> = ({ history }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [seed, setSeed] = useState(0);
  const [iterations, setIterations] = useState<number>(20);
  const [rand, setRand] = useState<number>(3.21876);

  const navBack = useCallback(() => {
    history.replace("/");
  }, [history]);

  const onSeedChange = useCallback(
    ({ target }) => {
      setError("");
      setSeed(parseInt(target.value) || 0);
    },
    [seed]
  );

  const onIterationsChange = (event: any, newValue: number | number[]) => {
    setIterations(newValue as number);
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.text}>
          <IconButton size="medium" onClick={navBack}>
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
          METODO DE LOS CENTROS CUADRADOS
        </Typography>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xl={6} lg={6} md={12} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <InputComponent
                    seed={seed}
                    iterations={iterations}
                    setRand={setRand}
                    onSeedChange={onSeedChange}
                    onIterationsChange={onIterationsChange}
                    error={error}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <ResultComponent answer={rand} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <AboutComponent />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MidSquareScreen;
