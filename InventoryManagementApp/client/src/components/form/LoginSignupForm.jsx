import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../theme";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Signup from "./Signup";
import Login from "./Login";
import PersonAdd from "@mui/icons-material/PersonAdd"
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: 450,
  },
  paper: {
    padding: '24px',
    boxShadow: '0 2px 4px 0 #ABBDC225 !important',
    borderRadius: '8px',
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
              style={{ fontSize: "15px", fontFamily: theme.typography.fontFamily, color: theme.palette.text.secondary }}
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

          {showRegistration ? <Signup /> : <Login />}

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
      </div>
    </ThemeProvider>
  );
}

export default LoginSignupForm;
