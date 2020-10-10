import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

// Method
import MidSquareGenerator from "../../Core/Classes/MidSquare";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Montserrat-Bold",
    },
    content: {
      paddingTop: theme.spacing(3),
    },
    cards: {
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      borderRadius: "0.3px",
      border: "3px solid #7c8599",
    },
    center: {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontFamily: "Montserrat-Bold",
    },
  })
);

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
  multiplierA: number;
  modulus: number;
  seed: number;
  iterations: number;
  handleSeedChange: (event: any) => void;
  handleMultiChange: (event: any) => void;
  handleModulusChange: (event: any) => void;
  handleItersChange: (event: any, newValue: number | number[]) => void;
  recalculateRandNumber: (
    multiplierA: number,
    modulus: number,
    seed: number,
    iterations: number
  ) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  multiplierA,
  modulus,
  seed,
  iterations,
  handleSeedChange,
  handleMultiChange,
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
        Llena los datos solicitados y selecciona generar para obtener tu número
        aleatorio.
      </Typography>
      <ErrorMessage data-testid="error-message">{error}</ErrorMessage>
      <Box className={classes.content}>
        <TextField
          id="outlined-basic"
          label="Semilla"
          variant="outlined"
          size="small"
          value={seed}
          onChange={(e) => handleSeedChange(e)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Multiplicador"
          variant="outlined"
          size="small"
          value={multiplierA}
          onChange={(e) => handleMultiChange(e)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Módulo"
          variant="outlined"
          size="small"
          value={modulus}
          onChange={(e) => handleModulusChange(e)}
        />
        <br />

        <Slider
          value={iterations}
          step={1}
          valueLabelDisplay="auto"
          onChange={handleItersChange}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ color: "white" }}
          onClick={() => {
            recalculateRandNumber(multiplierA, modulus, seed, iterations);
          }}
        >
          Generar
        </Button>
      </Box>
    </Card>
  );
};

export default InputComponent;
