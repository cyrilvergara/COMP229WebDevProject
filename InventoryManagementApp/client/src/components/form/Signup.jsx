import React, { useState } from "react";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Input,
  TextField,
  Button,
} from '@material-ui/core';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { create } from "../../apis/users.api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btnPrimary: {
    width: 'min-content',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '12px 24px',
  },
}));

export default function Login({updateShowRegistration, updateSnackbarState}) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const [fields, setFieldValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const onTextChange = (field) => (event) => {
    setFieldValues({ ...fields, [field]: event.target.value });
  };

  const onSubmitClick = () => {
    const newAccount = {
      name: fields.name,
      username: fields.username,
      email: fields.email,
      password: fields.password,
    };

    create(newAccount).then((response) => {
      if (response.error) {
        setFieldValues({ ...fields, error: response.error });
        updateSnackbarState(false, true)
        return;
      }

      updateSnackbarState(true, true)
      updateShowRegistration(false);
    });
  };

  // Handles Display and Hide Password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
      <div>
        <div style={{ marginTop: "10px" }}>
          <TextField
            required
            label="Name"
            id="standard-basic"
            variant="standard"
            fullWidth
            size="small"
            onChange={onTextChange("name")}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <TextField
            required
            label="Username"
            id="standard-basic"
            variant="standard"
            size="small"
            fullWidth
            onChange={onTextChange("username")}
          />
        </div>

        <div style={{ marginTop: "5px" }}>
          <TextField
            required
            type="email"
            label="Email Address"
            fullWidth
            id="standard-basic"
            variant="standard"
            size="small"
            onChange={onTextChange("email")}
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              required
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={onTextChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<LoginIcon />}
            onClick={onSubmitClick}
            disableElevation
            className={classes.btnPrimary}
          >
            SUBMIT
          </Button>
        </div>
      </div>
  );
}
