import React from "react";
import { update, get } from "../../apis/item.api";
import authHelper from "../../helper/auth.helper";
import SearchCard from "./Search";
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

    const updatedItem = {
      itemName: textFields.itemName,
      description: textFields.description,
      availableQty: textFields.availableQty,
      price: textFields.price,
      category: textFields.category,
      supplier: textFields.supplier,
      size: textFields.size,
      unit: textFields.unit,
    };

    update(updatedItem, textFields.id, auth.token).then((response) => {
      if (response.error) {
        setFieldValues({ ...textFields, error: response.error });
        return;
      }
    });
  };

  const onSearchClick = () => {
    get(textFields.id, auth.token).then((data) => {
      setFieldValues({
        ...textFields,
        itemName: data.itemName,
        description: data.description,
        availableQty: data.availableQty,
        price: data.price,
        category: data.category,
        supplier: data.supplier,
        size: data.size,
        unit: data.unit,
      });
    });
  };

  return (
    <>
      <Container className={classes.main}>
        <Typography variant="h5">
          Update a record
        </Typography>
        {/* ----- Removed search for third release -----
        <SearchCard /> 
        */}
        <Card className={classes.card}>
          <Typography variant="body1" className={classes.cardTitle}>
            Enter A Product ID
          </Typography>
          <Typography variant="body2" className={classes.cardSubtitle}>
            Please fill in all required fields
          </Typography>
          <form onSubmit={onSubmitClick}>
            <Grid container className={classes.grid}>
              <TextField
                label="Id"
                onChange={onTextChange("id")}
                fullWidth
                variant="standard"
                required
                className={classes.gridFull}
              />
              <TextField
                label="Item Name"
                onChange={onTextChange("itemName")}
                value={textFields.itemName}
                fullWidth
                variant="standard"
                required
                className={classes.gridFull}
              />
              <TextField
                label="Description"
                value={textFields.description}
                onChange={onTextChange("description")}
                fullWidth
                multiline
                rows={4}
                variant="standard"
                className={classes.gridFull}
              />
              <TextField
                label="Price"
                value={textFields.price}
                onChange={onTextChange("price")}
                fullWidth
                variant="standard"
              />
              <TextField
                label="Initial Quantity"
                value={textFields.availableQty}
                onChange={onTextChange("availableQty")}
                fullWidth
                variant="standard"
              />
              <TextField
                label="Category"
                value={textFields.category}
                onChange={onTextChange("category")}
                fullWidth
                variant="standard"
              />
              <TextField
                label="Supplier"
                value={textFields.supplier}
                onChange={onTextChange("supplier")}
                fullWidth
                variant="standard"
              />
              <TextField
                label="Size"
                value={textFields.size}
                onChange={onTextChange("size")}
                fullWidth
                variant="standard"
              />
              <TextField
                label="Unit"
                value={textFields.unit}
                onChange={onTextChange("unit")}
                fullWidth
                variant="standard"
              />
            </Grid>
            <Button
            type="submit"
            variant="contained"
            disableElevation
            className={classes.btnPrimary}
            >
              Update
            </Button>
            {/* ---- Removed Search Functionality ----
            <Button
            variant="contained"
            color="secondary"
            onClick={onSearchClick}>
              Search
            </Button> 
            */}
          </form>
        </Card>
      </Container>
    </>
  );
}
