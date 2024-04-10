import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import LoginSignupForm from "../form/LoginSignupForm";
import Footer from "../footer/Footer";
import logo from '../../../assets/images/wdinvLogo_light.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh',
    padding: '80px 32px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '80px 24px 64px 24px',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center', // Center the text for smaller screens
      justifyItems: 'center',
      display: 'block',
    },
  },
  logo: {
    height: '48px',
    marginBottom: '24px',
  },
  column1: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto auto 48px auto',
    },
  },
  column2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
      textAlign: 'left',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
    },
  },
  subTitle: {
    color: theme.palette.primary.dark,
    textTransform: 'capitalize',
    textWrap: 'balance',
  },
  description: {
    color: theme.palette.grey[600],
    textWrap: 'balance',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem', // Smaller text on small screens
    },
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'white',
    textAlign: 'center',
    padding: 0,
    [theme.breakpoints.down('md')]: {
      position: 'relative', // Adjust position on small screens
      marginTop: '48px', 
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item className={classes.column1}>
          <img src={logo} alt="WDInv Logo" className={classes.logo} />
          <Typography variant="h4" className={classes.subTitle}>
            Effortless Inventory Control Awaits
          </Typography>
          <Typography variant="body1" className={classes.description}>
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
  );
}
