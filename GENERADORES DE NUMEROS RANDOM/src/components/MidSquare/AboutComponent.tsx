import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Montserrat-Bold",
    },
    header: {
      fontWeight: "bold",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    cards: {
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      borderRadius: "0.3px",
      border: "3px solid #7c8599",
    },
    section2: {
      margin: theme.spacing(2, 0),
    },
    imageCentered: {
      alignItems: "center",
      textAlign: "center",
    },
  })
);

const AboutComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h5" className={classes.header}>
            Método de los Centros Cuadrados
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.section2}
          >
            Es un algoritmo no congruencial que fue propuesto en los años
            cuarenta del siglo XX por Von Neumann y Metrópolis.
          </Typography>
        </Grid>
        <Grid item sm={12} lg={12} className={classes.imageCentered}>
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <img src="./img/john_von_neumann.jpg" width="150px" />
            </Grid>
            <Grid item sm={12}>
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.section2}
              >
                John Von Neumann
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} lg={12}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.section2}
          >
            En matemáticas, el método del cuadrado medio es un método para
            generar números pseudoaleatorios. En la práctica no es un buen
            método, ya que su período suele ser muy corto y tiene algunas
            debilidades severas; repetido lo suficiente, el método del cuadrado
            medio comenzará a generar repetidamente el mismo número o pasará a
            un número anterior en la secuencia y se repetirá indefinidamente.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutComponent;
