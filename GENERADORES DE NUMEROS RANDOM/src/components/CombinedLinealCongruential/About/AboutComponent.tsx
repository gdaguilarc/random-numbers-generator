import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import useStyles from "../CombinedLinealStyles";

const AboutComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h5" className={classes.header}>
            Método Congruencial Lineal Combinado
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.section2}
          >
            Desarrollado por Pierre L'Écuyer en 1998
          </Typography>
        </Grid>
        <Grid item sm={12} lg={12} className={classes.imageCentered}>
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <img src="./img/Lecuyer.jpg" width="150px" />
            </Grid>
            <Grid item sm={12}>
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.section2}
              >
                Pierre L'Écuyer
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
            El método congruencial lineal combinado hace uso del método
            congruencial multiplicativo, de manera en que al combinar varios de
            estos generadores es posible crear un generador con un periodo mas
            grande que cada uno de sus generadores de manera individual.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutComponent;
