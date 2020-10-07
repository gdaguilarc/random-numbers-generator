import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import HistoryRow from "./HistoryRow";

import MidSquare from "../../Core/Classes/MidSquare";

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

interface HistoryListProps {
	seed: number;
	iterations: number;
}

const HistoryList: React.FC<HistoryListProps> = ({ seed, iterations }) => {
	const classes = useStyles();

	const generator = new MidSquare(seed, iterations);
	const rows = generator.history();

	return (
		<Card className={classes.cards}>
			<Grid container spacing={1}>
				<Grid item sm={12}>
					<Typography variant='h5' className={classes.header}>
						Historial
					</Typography>
				</Grid>
				<Grid item sm={12} md={12}>
					<Typography
						variant='subtitle1'
						color='textSecondary'
						className={classes.section2}
					>
						Este es el historial de todas las operaciones del metodo
					</Typography>
				</Grid>
				<Table aria-label='customized table'>
					<TableHead>
						<TableRow>
							<TableCell>Semilla</TableCell>
							<TableCell>Al cuadrado</TableCell>
							<TableCell>Nuevo número</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<HistoryRow seed={row.seed} squared={row.squared} res={row.res} />
						))}
					</TableBody>
				</Table>
			</Grid>
		</Card>
	);
};

export default HistoryList;