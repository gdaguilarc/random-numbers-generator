import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

import MidSquareGenerator from "../../../Core/Classes/MidSquare";

import useStyles from "./InputStyles";

const ErrorMessage = styled.div`
  position: fixed;
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;

const recalculateRandNumber = (seed: number, iterations: number) => {
  const generator = new MidSquareGenerator(seed, iterations);

  const ans: number = generator.generate();
  console.log(ans);
  return ans;
};

interface InputComponentProps {
  error: string;
  seed: number;
  iterations: number;
  onSeedChange({ target }: any): void;
  onIterationsChange({ target }: any): void;
  setRand(a: number): void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  seed,
  iterations,
  onSeedChange,
  onIterationsChange,
  setRand,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Typography component="h5" variant="h5" style={{ fontWeight: "bold" }}>
        Parámetros
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Llena los datos solicitados y selecciona generar para obtener tu número
        aleatorio.
      </Typography>
      <ErrorMessage data-testid="error-message">{error}</ErrorMessage>
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

        <TextField
          id="outlined-basic"
          label="Semilla"
          variant="outlined"
          defaultValue="0"
          size="small"
          inputProps={{ maxLength: 3 }}
          value={iterations}
          onChange={onIterationsChange}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ color: "white" }}
          onClick={() => {
            const value: number = recalculateRandNumber(seed, iterations);
            setRand(value);
          }}
        >
          Generar
        </Button>
      </Box>
    </Card>
  );
};

export default InputComponent;
