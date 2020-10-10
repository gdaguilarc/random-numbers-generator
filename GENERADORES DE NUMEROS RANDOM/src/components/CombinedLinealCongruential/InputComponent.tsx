import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import useStyles from "./UseStyles";

import MultiplicativeMethod from "../../Core/Classes/Multiplicative";
import CombinedLinealMethod from "../../Core/Classes/CombinedLineal";

const ErrorMessage = styled.div`
  position: fixed;
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;

interface InputComponentProps {
  error: string;
  k: number;
  iterations: number;
  onKChange(event: any, newValue: number | number[]): void;
  onIterationsChange({ target }: any): void;
  setRand(a: number): void;
  generatorList: any;
}

const RecalculateRand = (k: number, iterations: number, list: any) => {
    let randomList: number[] = [];

    list.forEach((g: {id: number, error: string, seed: number, a: number, modulo: number}) =>{
        const multGenerator = new MultiplicativeMethod(g.a, g.modulo, g.seed, iterations);

        const rand: number = multGenerator.generate();

        randomList.push(rand);
    });

    const generator = new CombinedLinealMethod(randomList, iterations, k, list[0].modulo-1);

    return generator.generate();
}

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  k,
  iterations,
  onKChange,
  onIterationsChange,
  setRand,
  generatorList,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Typography component="h5" variant="h5">
        PARAMETROS
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Llena los datos solicitados y selecciona generar para obtener tu número
        aleatorio.
      </Typography>
      <ErrorMessage data-testid="error-message">{error}</ErrorMessage>
      <Box className={classes.content}>
        <Typography id="k-slider" gutterBottom>
            K
        </Typography>

        <Slider
            value={k}
            step={1}
            valueLabelDisplay="auto"
            onChange={onKChange}
            max={10}
            min={1}
            aria-labelledby="k-slider"
        />

        <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Iterations"
            variant="outlined"
            defaultValue="0"
            size="small"
            inputProps={{ maxLength: 4 }}
            value={iterations}
            onChange={onIterationsChange}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ color: "white" }}
          onClick={() => {
            const value : number = RecalculateRand(k, iterations, generatorList);
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
