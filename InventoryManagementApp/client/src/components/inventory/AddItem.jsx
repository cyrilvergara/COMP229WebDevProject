import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { create } from "../../apis/item.api";
import authHelper from "../../helper/auth.helper";

export default function AddItem() {
  const auth = authHelper.isAuthenticated();

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
        return;
      }
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Create New Item
      </Typography>
      <form onSubmit={onSubmitClick}>
        <TextField
          label="Item Name"
          onChange={onTextChange("itemName")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Description"
          onChange={onTextChange("description")}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Price"
          onChange={onTextChange("price")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Initial Quantity"
          onChange={onTextChange("availableQty")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Category"
          onChange={onTextChange("category")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Supplier"
          onChange={onTextChange("supplier")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Size"
          onChange={onTextChange("size")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Unit"
          onChange={onTextChange("unit")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Item
        </Button>
      </form>
    </Container>
  );
}
