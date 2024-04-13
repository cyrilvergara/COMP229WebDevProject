import React from "react";
import { remove, get } from "../../apis/item.api";
import authHelper from "../../helper/auth.helper";
import SearchCard from "../Global/Search";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    color: theme.palette.common.black,
    maxWidth: "700px",
    padding: "64px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "24px",
    "@media (max-width:960px)": {
      padding: "48px 24px 64px 24px",
    },
    "@media (min-width:960px) and (max-width:1280px)": {
      padding: "64px 24px",
    },
  },
  card: {
    width: "100%",
    boxShadow: "0 2px 4px 0 rgba(171,189,194,.25)",
    backgroundColor: theme.palette.common.white,
    borderRadius: "8px",
    padding: "24px",
  },
  cardTitle: {
    color: theme.palette.common.black,
    fontWeight: 700,
  },
  cardSubtitle: {
    color: theme.palette.grey[600],
    marginBottom: "36px",
  },
  btnPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: "12px 24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gridAutoFlow: "row",
    gap: "24px",
    marginBottom: "36px",
    "@media (max-width:960px)": {
      gridTemplateColumns: "1fr",
    },
  },
  gridFull: {
    gridColumn: "1 / -1",
  },
}));

export default function EditItem() {
  const classes = useStyles();
  const auth = authHelper.isAuthenticated();

  const [textFields, setFieldValues] = React.useState({
    id: "",
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

    setConfirmDialogOpen(true);
  };

  const onSearchClick = (itemId) => {
    get(itemId, auth.token).then((data) => {
      if (data && data.error) {
        setOpenSnackBar({
          isSuccess: false,
          isOpen: true,
          message: `Failed to load item with id: ${itemId}`,
        });
        return;
      }

      setFieldValues({
        ...textFields,
        id: data._id,
        itemName: data.itemName || data.itemcode,
        description: data.description || data.desc,
        availableQty: data.availableQty || data.qty,
        price: data.price,
        category: data.category,
        supplier: data.supplier,
        size: data.size,
        unit: data.unit,
      });
    });
  };

  const [openSnackBar, setOpenSnackBar] = React.useState({
    isSuccess: false,
    isOpen: false,
    message: "",
  });

  const handleSnackBarClose = () => {
    setOpenSnackBar({ isSuccess: false, isOpen: false, message: "" });
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setConfirmDialogOpen] = React.useState(false);

  const dialogConfirmClick = () => {
    setConfirmDialogOpen(true);

    remove(textFields.id, auth.token).then((response) => {
      if (response && response.error) {
        setOpenSnackBar({
          isSuccess: false,
          isOpen: true,
          message: `An error occurred deleting ${textFields.itemName}`,
        });

        setConfirmDialogOpen(false);

        return;
      }

      setOpenSnackBar({
        isSuccess: true,
        isOpen: true,
        message: `Successfully deleted item ${textFields.itemName}`,
      });

      setConfirmDialogOpen(false);
    });
  };

  const dialogCancelClick = () => {
    setConfirmDialogOpen(false);
  };

  return (
    <>
      <Container className={classes.main}>
        <Typography variant="h5">Delete a record</Typography>

        <SearchCard onSearch={onSearchClick} classes={classes} />

        <Card className={classes.card}>
          <Typography variant="body2" className={classes.cardSubtitle}>
            Please double check records before confirming delete.
          </Typography>
          <form onSubmit={onSubmitClick}>
            <Grid container className={classes.grid}>
              <TextField
                label="Id"
                value={textFields.id}
                fullWidth
                variant="standard"
                className={classes.gridFull}
                disabled
              />
              <TextField
                label="Item Name"
                onChange={onTextChange("itemName")}
                value={textFields.itemName}
                fullWidth
                variant="standard"
                className={classes.gridFull}
                disabled
              />
              <TextField
                label="Description"
                value={textFields.description}
                onChange={onTextChange("description")}
                fullWidth
                multiline
                minRows={4}
                variant="standard"
                className={classes.gridFull}
                disabled
              />
              <TextField
                label="Price"
                value={textFields.price}
                onChange={onTextChange("price")}
                fullWidth
                variant="standard"
                disabled
              />
              <TextField
                label="Initial Quantity"
                value={textFields.availableQty}
                onChange={onTextChange("availableQty")}
                fullWidth
                variant="standard"
                disabled
              />
              <TextField
                label="Category"
                value={textFields.category}
                onChange={onTextChange("category")}
                fullWidth
                variant="standard"
                disabled
              />
              <TextField
                label="Supplier"
                value={textFields.supplier}
                onChange={onTextChange("supplier")}
                fullWidth
                variant="standard"
                disabled
              />
              <TextField
                label="Size"
                value={textFields.size}
                onChange={onTextChange("size")}
                fullWidth
                variant="standard"
                disabled
              />
              <TextField
                label="Unit"
                value={textFields.unit}
                onChange={onTextChange("unit")}
                fullWidth
                variant="standard"
                disabled
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              className={classes.btnPrimary}
            >
              Delete
            </Button>
          </form>
        </Card>

        <SnackBar
          open={openSnackBar.isOpen}
          onClose={handleSnackBarClose}
          message={openSnackBar.message}
          severity={openSnackBar.isSuccess ? "success" : "error"}
          position={{ vertical: "bottom", horizontal: "right" }}
        />

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={dialogCancelClick}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Confirm Delete"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete item {textFields.itemName}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={dialogConfirmClick}>
              Confirm
            </Button>
            <Button onClick={dialogCancelClick} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
