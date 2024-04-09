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
import Typography from "@material-ui/core/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
import { makeStyles } from "@material-ui/core/styles";
import { signin } from "../../apis/auth.api";
import auth from "../../helper/auth.helper";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const [fields, setFieldValues] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  const onTextChange = (field) => (event) => {
    setFieldValues({ ...fields, [field]: event.target.value });
  };

  const onLoginClick = () => {
    const userCredentials = {
      email: fields.email,
      password: fields.password,
    };

    signin(userCredentials).then((response) => {
      if (response.error) {
        setFieldValues({ ...fields, error: response.error });
        return;
      }

      auth.authenticate(response, () => {
        setFieldValues({ ...fields, error: "" });
        setIsAuthenticated(true);
        navigate("/item/list", { replace: true });
      });
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };


  if (isAuthenticated) {
    return null; // Or render a loading spinner or redirect indicator
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.paddingTop15}>
        <div className={classes.marginTop5}>
          <TextField
            type="email"
            label="Email Address"
            fullWidth
            variant="standard"
            onChange={onTextChange("email")}
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

        {fields.error && (
          <Typography component="p" color="error">
            {fields.error}
          </Typography>
        )}

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
            onClick={onLoginClick}
            disableElevation
          >
            LOGIN
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
