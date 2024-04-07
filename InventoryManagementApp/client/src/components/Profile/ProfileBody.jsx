import React from "react";
import theme from "../../../theme";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({}));

export default function ProfileBody() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Grid container className={classes.grid}>
          <Grid item></Grid>
          <Grid item className={classes.main}>
            <Grid item className={classes.content}>
              <Typography variant="h5">Profile</Typography>
              <Card className={classes.card}>
                <Grid className={classes.cardHead}>
                  <Typography variant="h5">Name</Typography>
                  <Grid className={classes.cardAct}>
                    <Link to="/update">
                      <Button className={classes.btnIcon}>
                        {" "}
                        <EditOutlinedIcon className={classes.icon} />{" "}
                      </Button>
                    </Link>
                    <Link to="#">
                      <Button className={classes.btnIcon}>
                        {" "}
                        <DeleteOutlinedIcon className={classes.icon} />{" "}
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <CardContent className={classes.cardContent}>
                  <Container className={classes.item}>
                    <Typography variant="h6" className={classes.label}>
                      ID
                    </Typography>
                    <Typography variant="body1" className={classes.Info}>
                      Lorem Ipsum
                    </Typography>
                  </Container>
                  <Container className={classes.item}>
                    <Typography variant="h6" className={classes.label}>
                      Name
                    </Typography>
                    <Typography variant="body1" className={classes.Info}>
                      Lorem Ipsum
                    </Typography>
                  </Container>
                  <Container className={classes.item}>
                    <Typography variant="h6" className={classes.label}>
                      Email
                    </Typography>
                    <Typography variant="body1" className={classes.Info}>
                      Lorem Ipsum
                    </Typography>
                  </Container>
                  <Container className={classes.item}>
                    <Typography variant="h6" className={classes.label}>
                      Account Created On
                    </Typography>
                    <Typography variant="body1" className={classes.Info}>
                      Lorem Ipsum
                    </Typography>
                  </Container>
                  <Container className={classes.item}>
                    <Typography variant="h6" className={classes.label}>
                      Account Last updated on
                    </Typography>
                    <Typography variant="body1" className={classes.Info}>
                      Lorem Ipsum
                    </Typography>
                  </Container>
                  <Container className={classes.item}>
                    <Typography variant="h6" className={classes.label}>
                      User Type
                    </Typography>
                    <Typography variant="body1" className={classes.Info}>
                      Lorem Ipsum
                    </Typography>
                  </Container>
                  <Container className={classes.item}>
                    <Typography variant="h6" className={classes.label}>
                      Password
                    </Typography>
                    <Typography variant="body1" className={classes.Info}>
                      Lorem Ipsum
                    </Typography>
                    <Link to="/change-password" className={classes.textLink}>
                      <Typography variant="h6">Change Password</Typography>
                    </Link>
                  </Container>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
