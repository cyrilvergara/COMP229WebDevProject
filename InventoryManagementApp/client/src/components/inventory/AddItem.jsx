import React from "react";
import { create } from "../../apis/item.api";
import authHelper from "../../helper/auth.helper";
import SnackBar from "../Global/Snackbar";
import {
  Typography,
  Container,
  TextField,
  Button,
  Card,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '700px',
    padding: '64px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '24px',
    [theme.breakpoints.down('md')]: {
      padding: '48px 24px',
    },
  },
  card: {
    width: '100%',
    boxShadow: '0 2px 4px 0 rgba(171,189,194,.25)',
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px',
    padding: '24px',
  },
  cardTitle: {
    fontWeight: 700,
  },
  cardSubtitle: {
    color: theme.palette.grey[600],
    marginBottom: '36px',
  },
  btnPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '12px 24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gridAutoFlow: 'row',
    gap: '24px',
    marginBottom: '36px',
  },
  gridFull: {
    gridColumn: '1 / -1',
  },
}));

export default function AddItem() {
  const classes = useStyles();
  const auth = authHelper.isAuthenticated();

  const [openSnackBar, setOpenSnackBar] = React.useState({
    isSuccess: false,
    isOpen: false
  });

  const handleSnackBarClose = () => {
    setOpenSnackBar({ isSuccess: false, isOpen: false });
  };

  const [textFields, setFieldValues] = React.useState({
    itemName: "",
    description: "",
    availableQty: 0,
    price: 0.0,
    category: "",
    supplier: "",
    size: "",
    unit: "",
  });

  const onTextChange = (field) => (event) => {
    setFieldValues({ ...textFields, [field]: event.target.value });
  };

  const onSubmitClick = (event) => {
    event.preventDefault();

    const newItem = {
      itemName: textFields.itemName,
      description: textFields.description,
      availableQty: textFields.availableQty,
      price: textFields.price,
      category: textFields.category,
      supplier: textFields.supplier,
      size: textFields.size,
      unit: textFields.unit,
    };

    create(newItem, auth.token).then((response) => {
      if (response.error) {
        setFieldValues({ ...textFields, error: response.error });
        setOpenSnackBar({ isSuccess: false, isOpen: true });
        return;
      }

      setOpenSnackBar({ isSuccess: true, isOpen: true });
    });
  };

  return (
    <Container className={classes.main}>
      <Typography variant="h5">
        Create New Item
      </Typography>
      <Card className={classes.card}>
        <Typography variant="body1" className={classes.cardTitle}>
          Record Details
        </Typography>
        <Typography variant="body2" className={classes.cardSubtitle}>
          Please fill in all required fields
        </Typography>
        <form onSubmit={onSubmitClick}>
          <Grid container className={classes.grid}>
            <TextField
              label="Item Name"
              onChange={onTextChange("itemName")}
              fullWidth
              variant="standard"
              className={classes.gridFull}
            />
            <TextField
              label="Description"
              onChange={onTextChange("description")}
              fullWidth
              multiline
              rows={4}
              variant="standard"
              className={classes.gridFull}
            />
            <TextField
              label="Price"
              onChange={onTextChange("price")}
              fullWidth
              variant="standard"
            />
            <TextField
              label="Initial Quantity"
              onChange={onTextChange("availableQty")}
              fullWidth
              variant="standard"
            />
            <TextField
              label="Category"
              onChange={onTextChange("category")}
              fullWidth
              variant="standard"
            />
            <TextField
              label="Supplier"
              onChange={onTextChange("supplier")}
              fullWidth
              variant="standard"
            />
            <TextField
              label="Size"
              onChange={onTextChange("size")}
              fullWidth
              variant="standard"
            />
            <TextField
              label="Unit"
              onChange={onTextChange("unit")}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Button
            type="submit"
            disableElevation
            className={classes.btnPrimary}
          >
            Create Item
          </Button>
        </form>
      </Card>

      <SnackBar
        open={openSnackBar.isOpen}
        onClose={handleSnackBarClose}
        message={openSnackBar.isSuccess ? "Successfully created item" : "An error occurred creating the item"}
        severity={openSnackBar.isSuccess ? "success" : "error"}
        position={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </Container>
  );
}
