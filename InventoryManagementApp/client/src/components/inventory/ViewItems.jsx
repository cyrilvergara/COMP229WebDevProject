import React from "react";
import { getAll } from "../../apis/item.api";
import authHelper from "../../helper/auth.helper";
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
  heading: {
    textTransform: 'capitalize',
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
    getAll().then((data) => {
      if (!data.error) {
        // setData(data);
        setData(data.reverse().map((item, index) => ({ id: index, ...item })));
      }
    })
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1, align: "left", editable: false },
    { field: "itemName", headerName: "Name", flex: 1, align: "left", editable: false },
    { field: "description", headerName: "Description", flex: 1, align: "left", editable: false },
    { field: "availableQty", headerName: "Available Quantity", type: "number", flex: 1, align: "left", editable: false },
    { field: "price", headerName: "Price", type: "number", flex: 1, align: "left", editable: false },
    { field: "category", headerName: "Category", flex: 1, align: "left", editable: false },
    { field: "supplier", headerName: "Supplier", flex: 1, align: "left", editable: false },
    { field: "size", headerName: "Size", flex: 1, align: "left", editable: false },
    { field: "unit", headerName: "Unit", flex: 1, align: "left", editable: false },
  ];


  return (
    <Container className={classes.main}>
      <Typography variant="h4" className={classes.heading}>
        Welcome back, {authHelper.isAuthenticated().user.name}!
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
