import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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
        textField:{
            marginBottom: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        section2: {
            margin: theme.spacing(2, 0),
        },
        imageCentered: {
            alignItems: "center",
            textAlign: "center",
        },
        media: {
            height: 0,
            paddingTop: "56.25%", // 16:9
        },
        header: {
            fontWeight: "bold",
        }
    })
);

export default  useStyles;