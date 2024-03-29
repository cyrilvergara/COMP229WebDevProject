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

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: 450,
    margin: "30px auto 0",
    padding: theme.spacing(2),
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
      <Paper elevation={3} style={{ padding: 10 }}>
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
