import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../theme";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Signup from "./Signup";
import Login from "./Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SnackBar from "../Global/Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: 450,
    margin: "30px auto 0",
    padding: theme.spacing(2),
  },
  signupDiv: {
    marginTop: "10px",
    "& #btnSignup": {
      backgroundColor: "green",
    },
  },
}));

function LoginSignupForm() {
  const classes = useStyles();

  const [showRegistration, setShowRegistration] = React.useState(false);

  const onSignUpClick = () =>
    setShowRegistration((showRegistration) => !showRegistration);

  const updateShowRegistration = (updatedShowRegistration) => {
    setShowRegistration(updatedShowRegistration);
  };

  const onCreateUser = (success, open) => {
    setOpenSnackBar({ isSuccess: success, isOpen: open });
  };

  const [openSnackBar, setOpenSnackBar] = React.useState({
    isSuccess: false,
    isOpen: false,
  });

  const handleSnackBarClose = () => {
    setOpenSnackBar({ isSuccess: false, isOpen: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper elevation={3} style={{ padding: 10 }}>
          {showRegistration ? (
            <Chip
              icon={<FaceIcon />}
              label="Signup"
              variant="outlined"
              color="primary"
              style={{
                fontSize: "15px",
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.text.secondary,
              }}
            />
          ) : (
            <Chip
              icon={<AcUnitIcon />}
              label="Login"
              variant="outlined"
              color="primary"
              style={{
                fontSize: "15px",
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.text.secondary,
              }}
            />
          )}
          <br />

          {showRegistration ? (
            <Signup
              updateShowRegistration={updateShowRegistration}
              updateSnackbarState={onCreateUser}
            />
          ) : (
            <Login />
          )}

          <div className={classes.signupDiv}>
            <Button
              id="btnSignup"
              variant="contained"
              fullWidth
              startIcon={<PersonAdd />}
              component={Link}
              onClick={onSignUpClick}
            >
              {showRegistration ? "Sign in" : "Sign up"}
            </Button>
          </div>
        </Paper>

        <SnackBar
          open={openSnackBar.isOpen}
          onClose={handleSnackBarClose}
          message={
            openSnackBar.isSuccess
              ? "Registration successful"
              : "Registration failed"
          }
          severity={openSnackBar.isSuccess ? "success" : "error"}
          position={{ vertical: "bottom", horizontal: "left" }}
        />
      </div>
    </ThemeProvider>
  );
}

export default LoginSignupForm;
