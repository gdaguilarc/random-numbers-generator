import React from "react";
import { History } from "history";
import { useCallback, useState, useMemo } from "react";

import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh",
      color: theme.palette.common.white,
      flexFlow: "1",
    },
    container: {
      padding: theme.spacing(2),
    },
    text: {
      fontFamily: "Montserrat-Bold",
    },
    cards: {
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      borderRadius: "30px",
    },
    content: {
      paddingTop: "2%",
    },
  })
);

interface HomePageProps {
  history: History;
}

const HomePage: React.FC<HomePageProps> = ({ history }) => {
  const classes = useStyles();
  const theme = useTheme();

  const navToMidSquare = useCallback(() => {
    history.push(`midsquare`);
  }, [history]);

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.container}>
          <Typography variant="h4" className={classes.text}>
            SIMULADOR DE NUMEROS RANDOM
          </Typography>
        </div>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xl={6} lg={6} md={6} sm={6}>
              <CardActionArea onClick={navToMidSquare.bind(null)}>
                <Card className={classes.cards}>
                  <Typography component="h5" variant="h5">
                    Método de los Centros Cuadrados
                  </Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                    Es un algoritmo no congruencial que fue propuesto en los
                    años cuarenta del siglo XX por Von Neumann y Metrópolis.
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
