import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";

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

interface ResultComponentProps {
	answer: number;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ answer }) => {
	const classes = useStyles();
	return (
		<Card className={classes.cards}>
			<Typography component='h5' variant='h5' style={{ fontWeight: "bold" }}>
				Tú Numero es:
			</Typography>
			<Box className={classes.center}>
				<Typography component='h4' variant='h4'>
					<DoubleArrowRoundedIcon style={{ fontSize: "20px" }} />
					{answer}
				</Typography>
			</Box>
		</Card>
	);
};

export default ResultComponent;
