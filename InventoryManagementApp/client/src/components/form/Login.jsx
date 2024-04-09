import React from "react";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Input,
  Checkbox,
  TextField,
  Button,
  Typography,
  Container,
} from '@material-ui/core';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import { signin } from "../../apis/auth.api";
import auth from "../../helper/auth.helper";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '16px',
    margin: '16px 0 8px 0',
    padding: 0,
  },
  rememberMe: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    gap: '4px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '16px',
  },
  rememberMeText: {
    color: theme.palette.grey[600],
  },
  btnPrimary: {
    width: 'min-content',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '12px 24px',
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
      <div>
        <Container className={classes.column}>
          <TextField
            type="email"
            label="Email Address"
            fullWidth
            variant="standard"
            onChange={onTextChange("email")}
          />
          <FormControl fullWidth variant="standard">
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
        </Container>

        {fields.error && (
          <Typography component="p" color="error">
            {fields.error}
          </Typography>
        )}

        <Container className={classes.rememberMe}>
          <Checkbox
            {...label}
            size="small"
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <Typography variant="body2" className={classes.rememberMeText}>Remember Me</Typography>
        </Container>

        <div>
          <Button
            variant="contained"
            fullWidth
            onClick={onLoginClick}
            disableElevation
            className={classes.btnPrimary}
          >
            LOGIN
          </Button>
        </div>
      </div>
  );
}
