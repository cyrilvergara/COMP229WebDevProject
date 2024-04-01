import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/components/pages/Home";
import Dashboard from "./src/components/pages/Dashboard";
import Profile from "./src/components/account/Profile";
import UpdateInfo from "./src/components/account/UpdateInfo";
import UpdateAdmin from "./src/components/account/UpdateAdmin";
import ChangePassword from "./src/components/account/ChangePassword";
import SignUp from "./src/components/form/Signup";
import {
  AppBar,
  CssBaseline,
  Box,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemText,
  ListItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Footer from "./src/components/footer/Footer";
import logo from './assets/images/wdinvLogo_dark.svg';
import logoWD from './assets/images/WinterDevLogo_PrimaryLogoDark.svg';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.customColorDarkBlue,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: '24px 0',
  },
  logo: {
    height: '24px',
    padding: '0 24px',
    margin: '0 0 64px 0',
  },
  listItem: {
    color: theme.palette.primary.light,
    padding: '12px 24px',
    borderBottom: '1px solid rgba(234,245,249,.05)',
    "& a": {
      textDecoration: 'none !important',
    },
  },
  link: {
    textDecoration: 'none !important',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    textAlign: 'center',
    color: theme.palette.common.white,
    gap: '8px',
  },
  logoWD: {
    height: '48px',
  },
}));

const drawerWidth = 300;

const MainRouter = () => {
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <img src={logo} alt="WDInv Logo" className={classes.logo} />
          <List>
            <Link to="/dashboard" className={classes.link}>
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link to="/records/list" className={classes.link}>
              <ListItem button className={classes.listItem}>
                <ListItemText primary="View Records" />
              </ListItem>
            </Link>
          </List>
        </div>

        <div className={classes.footer}>
          <Typography variant="h6">Powered by</Typography>
          <img src={logoWD} alt="WDInv Logo" className={classes.logoWD} />
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Toolbar />
      </Box>
    </Box>

    // <div>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/dashboard" element={<Dashboard />} />
    //     <Route exact path="/profile" element={<Profile />} />
    //     <Route exact path="/update" element={<UpdateInfo />} />
    //     <Route exact path="/admin-update" element={<UpdateAdmin />} />
    //     <Route exact path="/change-password" element={<ChangePassword />} />
    //     <Route exact path="/signup" element={<SignUp />} />
    //   </Routes>
    // </div>
  );
};
export default MainRouter;
