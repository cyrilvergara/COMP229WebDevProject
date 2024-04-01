import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LoginSignupForm from "../form/LoginSignupForm";
import Footer from "../footer/Footer";
import theme from "../../../theme";
import logo from '../../../assets/images/wdinvLogo_light.svg';
import { capitalize, Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.black,
    display: 'flex',
    maxWidth: '100vw',
    minHeight: '100vh',
    flexDirection: 'column',
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  main: {
    maxWidth: theme.breakpoints.values.lg,
    display: 'flex',
    flexDirection: 'column',
    padding: '120px 0 0 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3),
  },
  column1: {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start',
  },
  column2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  heading: {
    textTransform: 'capitalize',
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
    textAlign: "center"
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Container className={classes.main}>
          <Grid container className={classes.grid}>
            <Grid item className={classes.column1}>
              <img src={logo} alt="WDInv Logo" height='40px' />
              <Typography variant="h4" className={classes.heading}>
                Effortless Inventory Control Awaits
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Simplify your stock control with WDInv, the intuitive inventory
                management solution. Enjoy real-time tracking, streamlined
                ordering, and actionable insights-all in one place. Get ready to
                elevate your inventory efficiency.
              </Typography>
            </Grid>
            <Grid item className={classes.column2}>
              <LoginSignupForm />
            </Grid>
          </Grid>
          <Container className={classes.footer}>
            <Footer />
          </Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
