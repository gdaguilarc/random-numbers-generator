import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import MixedCongruential from "../../Core/Classes/MixedCongruential";

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

interface PassOrFailProps {
	multiplierA: number;
	incrementC: number;
	modulus: number;
}

const PassOrFail: React.FC<PassOrFailProps> = ({multiplierA, incrementC, modulus}) => {
  const classes = useStyles();
  const generator = new MixedCongruential(multiplierA, incrementC, modulus, 0, 0);
  const answer = generator.isPeriod();
  return (
    <Card className={classes.cards}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.section2}
          >
            {answer}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PassOrFail;
