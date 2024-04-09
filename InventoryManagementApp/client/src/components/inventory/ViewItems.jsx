import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAll } from "../../apis/item.api";
import authHelper from "../../helper/auth.helper";
import {
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '64px 48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '64px',
  },
  heading: {
    textTransform: 'capitalize',
  },
}));

const drawerWidth = 280;

export default function ViewItems() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getAll().then((data) => {
      if (!data.error) {
        setData(data);
      }
    })
  }, []);

  return (
    <Container className={classes.main}>
      <Typography variant="h4" className={classes.heading}>
        Welcome back, {authHelper.isAuthenticated().user.name}!
      </Typography>



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
            {data.reverse().map((item, index) => (
              <TableRow
                key={index}
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
    </Container>
  );
}
