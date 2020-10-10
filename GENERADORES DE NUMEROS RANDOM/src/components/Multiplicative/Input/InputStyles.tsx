import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
  })
);

export default useStyles;
