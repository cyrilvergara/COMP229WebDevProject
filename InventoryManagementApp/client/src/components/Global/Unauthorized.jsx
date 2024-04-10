import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Card,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '550px',
    minHeight: 'calc(100vh - 64px)',
    padding: '64px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    boxShadow: '0 2px 4px 0 rgba(171,189,194,.25)',
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px',
    padding: '24px 64px',
    textAlign: 'center',
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: '28px',
  },
  subtitleBold: {
    color: theme.palette.grey[600],
    fontWeight: 700,
  },
  subtitle: {
    color: theme.palette.grey[600],
  },
  btnPrimary: {
    marginTop: '28px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '12px 24px',
  },
}));

const Unauthorized = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/item/list", { replace: true });
  };

  return (
    <Container className={classes.main}>
      <Card className={classes.card}>
        <Typography variant="body1" className={classes.subtitleBold}>
          Uh-oh!
        </Typography>
        <Typography variant="h2" className={classes.title}>
          401
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Unauthorized Access
        </Typography>
        <Typography variant="body2">
          Unfortunately, access to this page is restricted due to insufficient user permissions. Please reach out to your administrator if you believe this is an error.
        </Typography>
        <Button
          onClick={onHomeClick}
          variant="contained"
          disableElevation
          className={classes.btnPrimary}
        >
          Return to Home
        </Button>
      </Card>
    </Container>
  );
};

export default Unauthorized;
