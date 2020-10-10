import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Montserrat-Bold",
    },

    cards: {
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      border: "3px solid #7c8599",
      borderRadius: "0.3px",
      boxShadow: "7px 7px rgba(93,100,115, .8)",
    },
    center: {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontFamily: "Montserrat-Bold",
    },
  })
);

export default useStyles;
