import React from "react";

import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

import { Box, Container, Grid } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import MidSquareImg from "../../images/square.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      padding: "2%",
      color: theme.palette.common.white,
      flexFlow: "1",
    },
    text: {
      fontFamily: "Montserrat-Bold",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    content: {
      paddingTop: "2%",
    },

    rootCard: {
      display: "flex",
      maxWidth: "30",
    },
    detailsCard: {
      display: "flex",
      flexDirection: "column",
    },
    contentCard: {
      flex: "1 0 auto",
    },
    coverCard: {
      width: "-webkit-fill-available",
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

const HomePage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.text}>
          SIMULADOR DE NUMEROS RANDOM
        </Typography>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xl={6} lg={6} md={6} sm={12}>
              <Card className={classes.rootCard}>
                <div className={classes.detailsCard}>
                  <CardContent className={classes.contentCard}>
                    <Typography component="h5" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Mac Miller
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}></div>
                </div>
                <CardMedia
                  className={classes.coverCard}
                  image={MidSquareImg}
                  title="Live from space album cover"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
