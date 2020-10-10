import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";

import useStyles from "./MultiplicativeInputStyles";

const ErrorMessage = styled.div`
  position: fixed;
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;

interface InputComponentProps {
  id: number;
  error: string;
  seed: number;
  modulo: number;
  a: number;
  onMultChange(event: any, id: number, opt: number): void;
}

const MultiplicativeInputComponent: React.FC<InputComponentProps> = ({
  id,
  error,
  seed,
  a,
  modulo,
  onMultChange,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Typography component="h5" variant="h5">
        Generador {id}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Llena los datos solicitados y selecciona generar para obtener tu número
        aleatorio.
      </Typography>
      <ErrorMessage data-testid="error-message">{error}</ErrorMessage>
      <Box className={classes.content}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Semilla"
              variant="outlined"
              defaultValue="0"
              size="small"
              inputProps={{ maxLength: 4 }}
              value={seed}
              onChange={(e) => {
                onMultChange(e, id, 3);
              }}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Modulo"
              variant="outlined"
              defaultValue="0"
              size="small"
              inputProps={{ maxLength: 4 }}
              value={modulo}
              onChange={(e) => {
                onMultChange(e, id, 1);
              }}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Multiplicador A"
              variant="outlined"
              defaultValue="0"
              size="small"
              inputProps={{ maxLength: 4 }}
              value={a}
              onChange={(e) => {
                onMultChange(e, id, 2);
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default MultiplicativeInputComponent;
