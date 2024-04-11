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
    gap: '48px',
    maxHeight: 'calc(100vh - 64px)',
    '@media (max-width:960px)': {
      width: '100vw',
      padding: '48px 24px 64px 24px',
      gap: '24px',
    },
    '@media (min-width:960px) and (max-width:1280px)': {
      padding: '64px 24px',
    },
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
      padding: '10px',
    },
    '& .MuiDataGrid-row': {
      maxHeight: 'none',
      overflowX: 'auto',
    },
    '& .MuiDataGrid-virtualScroller': {
      // height: 'calc(100vh - 430px)',
      // '@media (max-width:960px)': {
      //   height: 'calc(100vh - 367px)',
      // },
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
    { field: "_id", headerName: "ID", minWidth: 150, flex: 1, align: "left", editable: false },
    { field: "itemName", headerName: "Name", minWidth: 150, flex: 1, align: "left", editable: false },
    { field: "description", headerName: "Description", minWidth: 150, flex: 1, align: "left", editable: false },
    { field: "availableQty", headerName: "Available Quantity", minWidth: 150, type: "number", flex: 1, align: "left", editable: false },
    { field: "price", headerName: "Price", type: "number", minWidth: 150, flex: 1, align: "left", editable: false },
    { field: "category", headerName: "Category", minWidth: 150, flex: 1, align: "left", editable: false },
    { field: "supplier", headerName: "Supplier", minWidth: 150, flex: 1, align: "left", editable: false },
    { field: "size", headerName: "Size", minWidth: 150, flex: 1, align: "left", editable: false },
    { field: "unit", headerName: "Unit", minWidth: 150, flex: 1, align: "left", editable: false },
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
