import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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

export default useStyles;
