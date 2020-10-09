import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

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
        textField:{
            marginBottom: theme.spacing(2),
            marginRight: theme.spacing(2),
        }
    })
);

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
}

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  k,
  iterations,
  onKChange,
  onIterationsChange,
  setRand,
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
            //Change this once you implement the rest



            setRand(10);
          }}
        >
          Generar
        </Button>
      </Box>
    </Card>
  );
};

export default InputComponent;
