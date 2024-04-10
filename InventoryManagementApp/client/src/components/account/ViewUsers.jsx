import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { list } from "../../apis/users.api";
import {
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@mui/x-data-grid";

const useStyles = makeStyles((theme) => ({
  main: {
    width: `calc(100vw - ${drawerWidth}px)`,
    padding: '64px 48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '64px',
  },
  dataGrid: {
    width: '100%',
    borderColor: 'transparent !important',
    boxShadow: '0 2px 4px 0 rgba(171,189,194,.25)',
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px !important',
    padding: '24px',
    '& .MuiDataGrid-cell': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: 'normal',
      padding: '10px',
    },
    '& .MuiDataGrid-row': {
      maxHeight: 'none',
    },
    '& .MuiDataGrid-virtualScroller': {
      height: 'calc(100vh - 448px)',
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      flexDirection: 'row !important',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 700,
    },
  },
}));

const drawerWidth = 295;

export default function ViewItems() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    list().then((data) => {
      if (!data.error) {
        // setData(data);
        setData(data.reverse().map((item, index) => ({ id: index, ...item })));
      }
    });
  }, []);

  const columns = [
    { field: "name", headerName: "Name", flex: 1, align: "left", editable: false },
    { field: "username", headerName: "Username", flex: 1, align: "left", editable: false },
    { field: "email", headerName: "Email", flex: 1, align: "left", editable: false },
    { field: "role", headerName: "Role", type: "number", flex: 1, align: "left", editable: false },
    { field: "created", headerName: "Created on", type: "number", flex: 1, align: "left", editable: false },
    { field: "updated", headerName: "Last Updated On", flex: 1, align: "left", editable: false },
  ];

  return (
    <Container className={classes.main}>
      <Typography variant="h5">
        View Users
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        rowCount={data.length}
        pagination
        disableSelectionOnClick
        className={classes.dataGrid}
      />

    </Container>
  );
}
