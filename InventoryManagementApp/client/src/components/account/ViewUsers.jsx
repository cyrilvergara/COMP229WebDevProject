import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { list } from "../../apis/users.api";

export default function ViewItems() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    list().then((data) => {
      if (!data.error) {
        setData(data);
      }
    });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.reverse().map((users, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{users.name}</TableCell>
                <TableCell align="right">{users.username}</TableCell>
                <TableCell align="right">{users.email}</TableCell>
                <TableCell align="right">{users.role}</TableCell>
                <TableCell align="right">{users.created}</TableCell>
                <TableCell align="right">{users.updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
