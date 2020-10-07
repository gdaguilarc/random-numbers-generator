import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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

interface HistoryRowProps {
	seed: number;
	squared?: number;
	res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({ seed, squared, res }) => {
	const classes = useStyles();
	return (
		<TableRow key={seed}>
			<TableCell component='th' scope='row'>
				{seed}
			</TableCell>
			<TableCell align='right'>{squared}</TableCell>
			<TableCell align='right'>{res}</TableCell>
		</TableRow>
	);
};

export default HistoryRow;