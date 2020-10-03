import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Montserrat-Bold",
    },

    cards: {
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      borderRadius: "30px",
    },
  })
);

const AboutComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Typography component="h3" variant="h5">
        Método de los Centros Cuadrados
      </Typography>

      <Typography variant="subtitle1" color="textSecondary">
        Es un algoritmo no congruencial que fue propuesto en los años cuarenta
        del siglo XX por Von Neumann y Metrópolis.
      </Typography>
    </Card>
  );
};

export default AboutComponent;
