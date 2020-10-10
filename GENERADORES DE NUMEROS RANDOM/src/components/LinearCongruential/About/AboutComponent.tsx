import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import useStyles from "./AboutStyles";

const AboutComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h5" className={classes.header}>
            Método de Congruencia Lineal
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.section2}
          >
            Es un algoritmo que fue propuesto en el año de 1951 por Derrick
            Henry Lehmer.
          </Typography>
        </Grid>
        <Grid item sm={12} lg={12} className={classes.imageCentered}>
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <img src="./img/Lehmer.jpg" width="150px" alt="" />
            </Grid>
            <Grid item sm={12}>
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.section2}
              >
                Derrick Henry Lehmer
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
            Es un algoritmo que permite obtener una secuencia de números
            pseudoaleatorios calculados con una función lineal discontinua. Es
            uno de los métodos más antiguos y conocidos para la generación de
            números pseudoaleatorios.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutComponent;
