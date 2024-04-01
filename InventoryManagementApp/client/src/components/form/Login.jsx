import React from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Checkbox,
  Stack,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={{ marginTop: "12px" }}>
          <TextField
            label="Email Address"
            fullWidth
            variant="standard"
            sx={{ width: "100%" }}
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
          />
        </div>
        <div style={{ marginTop: "12px" }}>
          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(event) => setPasswordInput(event.target.value)}
              value={passwordInput}
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

        <div
          style={{
            fontSize: "15px",
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.text.secondary,
            textAlign: 'left',
            marginLeft: '-12px',
          }}
        >
          <Checkbox
            {...label}
            size="small"
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          Remember Me
        </div>

        <div style={{ marginTop: "28px" }}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            fullWidth
            startIcon={<LoginIcon />}
            component={Link}
            to="/dashboard"
          >
            LOGIN
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
