import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { update, get } from "../../apis/item.api";
import authHelper from "../../helper/auth.helper";

export default function EditItem() {
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

  const onSearchClick = () =>{
    get(textFields.id, auth.token).then((data) => {
        setFieldValues(({
            ...textFields,
            itemName: data.itemName,
            description: data.description,
            availableQty: data.availableQty,
            price: data.price,
            category: data.category,
            supplier: data.supplier,
            size: data.size,
            unit: data.unit,
        }));
    })
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Edit Item
      </Typography>
      <form onSubmit={onSubmitClick}>
        <TextField
          label="Id"
          onChange={onTextChange("id")}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Item Name"
          onChange={onTextChange("itemName")}
          value={textFields.itemName}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Description"
          value={textFields.description}
          onChange={onTextChange("description")}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Price"
          value={textFields.price}
          onChange={onTextChange("price")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Initial Quantity"
          value={textFields.availableQty}
          onChange={onTextChange("availableQty")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Category"
          value={textFields.category}
          onChange={onTextChange("category")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Supplier"
          value={textFields.supplier}
          onChange={onTextChange("supplier")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Size"
          value={textFields.size}
          onChange={onTextChange("size")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Unit"
          value={textFields.unit}
          onChange={onTextChange("unit")}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
        <Button variant="contained" color="secondary" onClick={onSearchClick}>
          Search
        </Button>
      </form>
    </Container>
  );
}
