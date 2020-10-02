import React from "react";
import { useState, useCallback } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

// DESIGN
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import styled from "styled-components";

// Method
import MidSquareGenerator from "../../Core/Classes/MidSquare";
import { on } from "process";

export const ErrorMessage = styled.div`
  position: fixed;
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;

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
  const theme = useTheme();
  const [error, setError] = useState("");
  const [seed, setSeed] = useState(0);
  const [iterations, setIterations] = useState<number>(20);
  const [rand, setRand] = useState<number>(3.21876);

  const onSeedChange = useCallback(
    ({ target }) => {
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
          METODO DE LOS CENTROS CUADRADOS
        </Typography>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xl={6} lg={6} md={12} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <Card className={classes.cards}>
                    <Typography component="h5" variant="h5">
                      PARAMETROS
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Llena los datos solicitados y selecciona generar para
                      obtener tu número aleatorio.
                    </Typography>
                    <ErrorMessage data-testid="error-message">
                      {error}
                    </ErrorMessage>
                    <Box className={classes.content}>
                      <TextField
                        id="outlined-basic"
                        label="Semilla"
                        variant="outlined"
                        defaultValue="0"
                        size="small"
                        inputProps={{ maxLength: 4 }}
                        value={seed}
                        onChange={onSeedChange}
                      />
                      <Slider
                        value={iterations}
                        step={1}
                        valueLabelDisplay="auto"
                        onChange={onIterationsChange}
                      />

                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ color: "white" }}
                        onClick={() => {
                          const value: number = recalculateRandNumber(
                            seed,
                            iterations
                          );
                          setRand(value);
                        }}
                      >
                        Generar
                      </Button>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <Card className={classes.cards}>
                    <Typography component="h3" variant="h5">
                      Método de los Centros Cuadrados
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary">
                      Es un algoritmo no congruencial que fue propuesto en los
                      años cuarenta del siglo XX por Von Neumann y Metrópolis.
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <Card className={classes.cards}>
                    <Typography component="h4" variant="h4">
                      Tú Numero es:
                    </Typography>
                    <Box className={classes.center}>
                      <Typography component="h4" variant="h4">
                        <DoubleArrowRoundedIcon style={{ fontSize: "20px" }} />
                        {rand}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const recalculateRandNumber = (seed: number, iterations: number) => {
  const generator = new MidSquareGenerator(seed, iterations);

  const ans: number = generator.generate();
  console.log(ans);
  return ans;
};

export default MidSquareScreen;
