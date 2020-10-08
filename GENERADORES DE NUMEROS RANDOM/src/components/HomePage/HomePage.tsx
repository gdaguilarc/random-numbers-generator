import React from "react";
import { History } from "history";
import { useCallback } from "react";

import {
	makeStyles,
	createStyles,
	Theme,
	useTheme,
} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";

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

interface HomePageProps {
	history: History;
}

const HomePage: React.FC<HomePageProps> = ({ history }) => {
	const classes = useStyles();
	const theme = useTheme();

	const navToMidSquare = useCallback(() => {
		history.push(`midsquare`);
	}, [history]);

	const navToLinCong = useCallback(() => {
		history.push(`lincong`);
	}, [history]);

	const navToMultiplicative = useCallback(() => {
		history.push(`multiplicative`);
	}, [history]);

	return (
		<Box className={classes.root}>
			<Container maxWidth='xl'>
				<div className={classes.container}>
					<Typography variant='h4' className={classes.text} align='center'>
						SIMULADOR DE NUMEROS RANDOM
					</Typography>
				</div>

				<Box className={classes.content}>
					<Grid container spacing={5}>
						{/* metodo centros cuadrados */}
						<Grid item xl={4} lg={4} md={6} sm={12}>
							<CardActionArea onClick={navToMidSquare.bind(null)}>
								<Card className={classes.cards}>
									<Typography className={classes.header} variant='h5'>
										Método de los Centros Cuadrados
									</Typography>
									<Divider className={classes.section2} />
									<Typography
										variant='subtitle1'
										color='textSecondary'
										align='justify'
										className={classes.section2}
									>
										Es un algoritmo no congruencial que fue propuesto en los
										años cuarenta del siglo XX por Von Neumann y Metrópolis.
									</Typography>
								</Card>
							</CardActionArea>
						</Grid>
						{/* generador multiplicativo */}
						<Grid item xl={4} lg={4} md={6} sm={12}>
							<CardActionArea onClick={navToMultiplicative.bind(null)}>
								<Card className={classes.cards}>
									<Typography className={classes.header} variant='h5'>
										Generador Multiplicativo
									</Typography>
									<Divider className={classes.section2} />
									<Typography
										variant='subtitle1'
										color='textSecondary'
										align='justify'
										className={classes.section2}
									>
										El método congruencial multiplicativo (método de Lehmer) es
										un tipo de generador congruencial lineal
									</Typography>
								</Card>
							</CardActionArea>
						</Grid>
						{/* Método de Congruencia Lineal */}
						<Grid item xl={4} lg={4} md={6} sm={12}>
							<CardActionArea onClick={navToLinCong.bind(null)}>
								<Card className={classes.cards}>
									<Typography className={classes.header} variant='h5'>
										Método de Congruencia Lineal
									</Typography>
									<Divider className={classes.section2} />
									<Typography
										variant='subtitle1'
										color='textSecondary'
										align='justify'
										className={classes.section2}
									>
										Fue propuesto por Lehmer en el año de 1951.
									</Typography>
								</Card>
							</CardActionArea>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default HomePage;
