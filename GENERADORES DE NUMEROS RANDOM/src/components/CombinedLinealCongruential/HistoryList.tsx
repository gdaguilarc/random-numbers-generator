import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import HistoryRow from "./HistoryRow";

import useStyles from "./UseStyles";
import CombinedLinealMethod from "../../Core/Classes/CombinedLineal";
import MultiplicativeMethod from "../../Core/Classes/Multiplicative";

interface HistoryListProps {
  iterations: number;
  genList: any;
  k: number;
}

const HistoryList: React.FC<HistoryListProps> = ({ iterations, genList, k}) => {
    const classes = useStyles();

    let randomList: number[] = [];
    genList.forEach((g: {id: number, error: string, seed: number, a: number, modulo: number}) =>{
        const multGenerator = new MultiplicativeMethod(g.a, g.modulo, g.seed, iterations);

        const rand: number = multGenerator.generate();

        randomList.push(rand);
    });

    const generator = new CombinedLinealMethod(randomList, iterations, k, genList[0].modulo-1);
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
                        Estos son los valores usados a generar el número
                    </Typography>
                </Grid>
                <Table aria-label='customized table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>K</TableCell>
                            <TableCell>Suma Generadores</TableCell>
                            <TableCell>Numero Random</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <HistoryRow seed={row.seed} generated={row.generated} res={row.res} />
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Card>
    );
};

export default HistoryList;
