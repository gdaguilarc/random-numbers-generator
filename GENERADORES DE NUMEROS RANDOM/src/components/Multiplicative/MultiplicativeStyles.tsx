import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh",
      color: theme.palette.common.white,
      flexFlow: "1",
      padding: theme.spacing(2),
    },
    text: {
      fontFamily: "Montserrat-Bold",
    },
    content: {
      paddingTop: theme.spacing(3),
    },
    center: {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontFamily: "Montserrat-Bold",
    },
  })
);

export default useStyles;
