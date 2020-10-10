import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";

import useStyles from "./InputStyles";

const ErrorMessage = styled.div`
  position: fixed;
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;

interface InputComponentProps {
  error: string;
  multiplierA: number;
  incrementC: number;
  modulus: number;
  seed: number;
  iterations: number;
  handleSeedChange: (event: any) => void;
  handleMultiChange: (event: any) => void;
  handleIncrCChange: (event: any) => void;
  handleModulusChange: (event: any) => void;
  handleItersChange: (event: any, newValue: number | number[]) => void;
  recalculateRandNumber: (
    multiplierA: number,
    incrementC: number,
    modulus: number,
    seed: number,
    iterations: number
  ) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  multiplierA,
  incrementC,
  modulus,
  seed,
  iterations,
  handleSeedChange,
  handleMultiChange,
  handleIncrCChange,
  handleModulusChange,
  handleItersChange,
  recalculateRandNumber,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
        Parámetros
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Llena los datos solicitados y selecciona 'generar' para obtener tu
        número aleatorio.
      </Typography>
      <ErrorMessage data-testid="error-message">{error}</ErrorMessage>
      <Box className={classes.content}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <TextField
              id="outlined-basic"
              label="Semilla"
              variant="outlined"
              size="small"
              value={seed}
              onChange={(e) => handleSeedChange(e)}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-basic"
              label="Multiplicador"
              variant="outlined"
              size="small"
              value={multiplierA}
              onChange={(e) => handleMultiChange(e)}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-basic"
              label="Incremento"
              variant="outlined"
              size="small"
              value={incrementC}
              onChange={(e) => handleIncrCChange(e)}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-basic"
              label="Módulo"
              variant="outlined"
              size="small"
              value={modulus}
              onChange={(e) => handleModulusChange(e)}
            />
          </Grid>
          <Grid item sm={12}>
            <Slider
              value={iterations}
              step={1}
              valueLabelDisplay="auto"
              onChange={handleItersChange}
            />
          </Grid>
          <Grid item sm={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ color: "white" }}
              onClick={() => {
                recalculateRandNumber(
                  multiplierA,
                  incrementC,
                  modulus,
                  seed,
                  iterations
                );
              }}
            >
              Generar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default InputComponent;
