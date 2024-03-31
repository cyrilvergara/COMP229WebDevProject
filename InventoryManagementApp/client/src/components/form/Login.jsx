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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marginTop5: {
    marginTop: "5px",
  },
  marginTop10: {
    marginTop: "10px",
  },
  paddingTop15: {
    paddingTop: "15px",
  },
  rememberMe: {
    fontSize: "15px",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,
  },
}));

export default function Login() { 
  const classes = useStyles();

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
      <div className={classes.paddingTop15}>
        <div className={classes.marginTop5}>
          <TextField
            type="email"
            label="Email Address"
            fullWidth
            variant="standard"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
          />
        </div>
        <div className={classes.marginTop5}>
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

        <div className={classes.rememberMe}>
          <Checkbox
            {...label}
            size="small"
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          Remember Me
        </div>

        <div className={classes.marginTop10}>
          <Button
            variant="contained"
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
