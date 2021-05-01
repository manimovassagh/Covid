import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
        right:300,
        left:300,
        padding:200
    },
});

function createData(name, NumberOfData) {
    return { name, NumberOfData };
}


export default function CumulativeTable(props) {
    const rows = [
        createData('New Confirmed ', props.Cumulative.NewConfirmed),
        createData('Total Confirmed ', props.Cumulative.TotalConfirmed),
        createData('New Deaths', props.Cumulative.NewDeaths),
        createData('Total Deaths ', props.Cumulative.TotalDeaths),
        createData('New Recovered', props.Cumulative.NewRecovered),
    ];
    const classes = useStyles();

    return (
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
        <TableContainer component={Paper} style={{ width: 800 }}>
            <Table  className={classes.table} aria-label="caption table">

                <TableBody >
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" align="left">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.NumberOfData}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
    );
}
