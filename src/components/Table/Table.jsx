import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import s from "./table.module.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

export default function BasicTable() {
  const makeStyles = (param) => {
    if (param === "Approved") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (param === "Pending") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else if (param === "Delivered") {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };
  return (
    <div className={s.table}>
      <h3>Recent orders</h3>
      <TableContainer
        style={{
          boxShadow: "0px 13px 20px #80808029 ",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="lef">Tracking Id</TableCell>
              <TableCell align="lef">Date</TableCell>
              <TableCell align="lef">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className={s.status} style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
