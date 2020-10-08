import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

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

const AboutComponent: React.FC = () => {
	const classes = useStyles();
	return (
		<Card className={classes.cards}>
			<Grid container spacing={3}>
				<Grid item sm={12}>
					<Typography variant='h5' className={classes.header}>
						Método Congruencial Multiplicativo
					</Typography>
				</Grid>
				<Grid item sm={12} md={12}>
					<Typography
						variant='subtitle1'
						color='textSecondary'
						className={classes.section2}
					>
						El método congruencial multiplicativo (método de Lehmer) es un tipo
						de generador congruencial lineal.
					</Typography>
				</Grid>
				<Grid item sm={12} lg={12} className={classes.imageCentered}>
					<Grid container spacing={1}>
						<Grid item sm={12}>
							<img src='./img/Lehmer.jpg' width='150px' alt='' />
						</Grid>
						<Grid item sm={12}>
							<Typography
								variant='caption'
								color='textSecondary'
								className={classes.section2}
							>
								John Von Neumann
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid item sm={12} lg={12}>
					<Typography
						variant='subtitle1'
						color='textSecondary'
						className={classes.section2}
					>
						En matemáticas, el método congruencial multiplicativo es un método
						para para generar números pseudo aleatorios. Tiene como base al
						algoritmo congruencia lineal pero conlleva una operación menos.
					</Typography>
				</Grid>
			</Grid>
		</Card>
	);
};

export default AboutComponent;
