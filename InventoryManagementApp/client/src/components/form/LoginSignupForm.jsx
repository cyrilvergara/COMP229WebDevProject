import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../theme";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Switch from "@material-ui/core/Switch";
import Signup from "./Signup";
import Login from "./Login";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
}));

function LoginSignupForm() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {checked ? (
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
              style={{ fontSize: "15px", fontFamily: theme.typography.fontFamily, color: theme.palette.text.secondary }}
            />
          )}
          <br />
          <Switch checked={checked} onChange={handleChange} color="primary" />
          <br />
          {checked ? <Signup /> : <Login />}
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default LoginSignupForm;
