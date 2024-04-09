import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../theme";
import Signup from "./Signup";
import Login from "./Login";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SnackBar from "../Global/Snackbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 525,
    padding: theme.spacing(2),
  },
  signupDiv: {
    marginTop: "10px",
  },
  card: {
    padding: '24px',
    boxShadow: '0 2px 4px 0 rgba(171,189,194,.25) !important',
    borderRadius: '8px !important',
  },
  btnText: {
    color: `${theme.palette.primary.main} !important`,
    width: 'min-content',
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
        <Paper className={classes.card}>
          
          <Typography variant="h5">{showRegistration ? "Create your account" : "Welcome back!"}</Typography>

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
              variant="text"
              fullWidth
              component={Link}
              onClick={onSignUpClick}
              className={classes.btnText}
            >
              {showRegistration ? "Already have an account? Log in now" : "Don't have an account? Sign up now"}
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
