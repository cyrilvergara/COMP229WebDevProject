import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAll } from "../../apis/item.api";

export default function ViewItems() {
    const [data, setData] = React.useState([]);

    React.useEffect(() =>{
        getAll().then((data) => {
            if(!data.error){
                setData(data);
            }
        })
    }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Available Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Supplier</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Unit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.reverse().map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.itemName}</TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.availableQty}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.category}</TableCell>
                <TableCell align="right">{item.supplier}</TableCell>
                <TableCell align="right">{item.size}</TableCell>
                <TableCell align="right">{item.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
