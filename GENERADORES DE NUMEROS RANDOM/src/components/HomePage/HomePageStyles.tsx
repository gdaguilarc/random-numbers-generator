import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,
      minHeight: "100vh",
      color: theme.palette.primary.dark,
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
      borderRadius: "0.3px",
      boxShadow: "7px 7px rgba(155, 167, 192, .8)",
      border: "3px solid #8b96ac",
      minHeight: "150px",
      maxHeight: "500px",
    },
    darkcard: {
      backgroundColor: theme.palette.primary.dark,
    },
    header: {
      fontWeight: "bold",
      textAlign: "center",
    },
    section2: {
      margin: theme.spacing(2),
    },
    content: {
      paddingTop: "2%",
    },
    section3: {
      margin: theme.spacing(1, 1, 1),
    },
  })
);

export default useStyles;
