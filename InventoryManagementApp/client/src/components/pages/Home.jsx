import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LoginSignupForm from "../form/LoginSignupForm";
import Footer from "../footer/Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    padding: theme.spacing(4),
    overflow: "auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(3),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr", // Stack the elements on smaller screens
      textAlign: "center", // Center the text for smaller screens
      marginLeft: theme.spacing(0), // Adjust margin for smaller screens
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2), // Reduce padding on very small screens
    },
  },
  title: {
    fontSize: "5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem", // Smaller title on small screens
    },
  },
  titleColor: {
    color: theme.palette.customColorBlue,
  },
  subTitle: {
    fontSize: "6xl",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", // Smaller subtitle on small screens
    },
  },
  description: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem", // Smaller text on small screens
    },
  },
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      position: "relative", // Adjust position on small screens
      marginBottom: theme.spacing(2), // Add margin bottom on small screens
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <div className={classes.grid}>
          <div>
            <div className="mb-6">
              <Typography variant="h1" className={classes.title}>
                <span className={classes.titleColor}>wd</span>inv
              </Typography>

              <Typography variant="h2" className={classes.subTitle}>
                Effortless Inventory Control Awaits
              </Typography>
            </div>
            <Typography variant="body1" className={classes.description}>
              Simplify your stock control with WDInv, the intuitive inventory
              management solution. Enjoy real-time tracking, streamlined
              ordering, and actionable insights-all in one place. Get ready to
              elevate your inventory efficiency.
            </Typography>
          </div>
          <div>
            <LoginSignupForm />
          </div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
  );
}
