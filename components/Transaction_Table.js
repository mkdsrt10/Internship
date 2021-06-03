import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    maxWidth: 700,
  },
  tableCell: {
    color: "#000",
    fontFamily: "DM Sans",
    fontWeight: "bold",
    fontSize: 18,
  },
});

function createData(name, email, donation, first_on) {
  return { name, email, donation, first_on };
}

const rows = [
  createData("Vipin Jaluthria", "vipinjalothriya123@gmail.com", 159, 6.0),
  createData("Vipin Jaluthria", "vipinjalothriya123@gmail.com", 237, 9.0),
  createData("Vipin Jaluthria", "vipinjalothriya123@gmail.com", 262, 16.0),
  createData("Vipin Jaluthria", "vipinjalothriya123@gmail.com", 305, 3.7),
  createData("Vipin Jaluthria", "vipinjalothriya123@gmail.com", 356, 16.0),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Name</TableCell>
            <TableCell className={classes.tableCell}>
              Email
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Donation
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              First on&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.email}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.donation}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.first_on}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
