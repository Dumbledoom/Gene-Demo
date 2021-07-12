import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

interface DataTableProps {
  family: string;
  structures: number;
  compounds: number;
  druggable: boolean;
  enzyme: boolean;
  id: string;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DataTable: React.FC<DataTableProps> = (props: DataTableProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Family</TableCell>
            <TableCell align="center">Structures</TableCell>
            <TableCell align="center">Compounds</TableCell>
            <TableCell align="center">Druggable</TableCell>
            <TableCell align="center">Enzyme</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={props.id}>
            <TableCell component="th" scope="row">
              {props.family}
            </TableCell>
            <TableCell align="center">{props.structures}</TableCell>
            <TableCell align="center">{props.compounds}</TableCell>
            <TableCell align="center">
              {props.druggable ? (
                <CheckIcon style={{ color: 'green' }} />
              ) : (
                <CloseIcon color="secondary" />
              )}
            </TableCell>
            <TableCell align="center">
              {props.enzyme ? (
                <CheckIcon style={{ color: 'green' }} />
              ) : (
                <CloseIcon color="secondary" />
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
