import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

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
			minHeight: "400px",
			maxHeight: "400px",
		},
		section2: {
			margin: theme.spacing(2, 0),
		},
	})
);

const AboutComponent: React.FC = () => {
	const classes = useStyles();
	return (
		<Card className={classes.cards}>
			<Typography variant='h5' className={classes.header}>
				Método de los Centros Cuadrados
			</Typography>

			<Typography
				variant='subtitle1'
				color='textSecondary'
				className={classes.section2}
			>
				Es un algoritmo no congruencial que fue propuesto en los años cuarenta
				del siglo XX por Von Neumann y Metrópolis.
			</Typography>
		</Card>
	);
};

export default AboutComponent;
