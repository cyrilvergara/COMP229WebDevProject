import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Signup from "./Signup";
import Login from "./Login";
import {
  Button,
  Typography,
  Paper,
} from '@material-ui/core';
import { Link } from "react-router-dom";
import SnackBar from "../Global/Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 525,
    // padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  signupDiv: {
    marginTop: "10px",
  },
  card: {
    padding: '24px',
    boxShadow: '0 2px 4px 0 rgba(171,189,194,.25)',
    borderRadius: '8px !important',
  },
  btnText: {
    color: theme.palette.primary.main,
    justifyContent: 'flex-start',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.grey[300],
    },
  },
  title: {
    color: theme.palette.common.black,
    marginBottom: '12px',
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
    <div className={classes.root}>
      <Paper className={classes.card}>

        <Typography variant="h5" className={classes.title}>{showRegistration ? "Create your account" : "Welcome back!"}</Typography>

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
            component={Link}
            fullWidth
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
  );
}

export default LoginSignupForm;
