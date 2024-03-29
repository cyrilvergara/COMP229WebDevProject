import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LoginSignupForm from "../form/LoginSignupForm";
import Footer from "../footer/Footer";
import theme from "../../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    minHeight: "88vh",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(10),
  },
  title: {
    fontSize: "5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(6),
  },
  titleColor: {
    color: theme.palette.customColorBlue,
  },
  subTitle: {
    fontSize: "6xl",
    color: theme.palette.text.secondary,
  },
  description: {
    color: theme.palette.text.secondary,
  },
  footer: {
    marginTop: theme.spacing(9),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div>
            <div className="mb-6">
              <Typography variant="h1" className={classes.title}>
                <span className={classes.titleColor}>wd</span>
                <span>inv</span>
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
    </ThemeProvider>
  );
}