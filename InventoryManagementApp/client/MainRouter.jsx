import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./src/components/pages/Home";
import ViewItems from "./src/components/inventory/ViewItems";
import AddItem from "./src/components/inventory/AddItem";
import EditItem from "./src/components/inventory/EditItem";
import authHelper from "./src/helper/auth.helper";

import {
  AppBar,
  CssBaseline,
  Box,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Footer from "./src/components/footer/Footer";
import logo from "./assets/images/wdinvLogo_dark.svg";
import logoWD from "./assets/images/WinterDevLogo_PrimaryLogoDark.svg";

const isActive = (location, path) => {
  return location.pathname === path
    ? { color: "#0BC4FF" }
    : { color: "#EFF6F9" };
};

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
    padding: "24px 0",
  },
  logo: {
    height: "24px",
    padding: "0 24px",
    margin: "0 0 64px 0",
  },
  listItem: {
    color: theme.palette.primary.light,
    padding: "12px 24px",
    borderBottom: "1px solid rgba(234,245,249,.05)",
    "& a": {
      textDecoration: "none !important",
    },
  },
  link: {
    textDecoration: "none !important",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    color: theme.palette.common.white,
    gap: "8px",
  },
  logoWD: {
    height: "48px",
  },
}));

const drawerWidth = 300;

const MainRouter = () => {
  const classes = useStyles();
  const location = useLocation();

  if (!authHelper.isAuthenticated()) {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        ;
      </>
    );
  }

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
            {/* <Link to="/dashboard" className={classes.link}>
              <ListItem button className={classes.listItem} style={isActive(location, "/dashboard")}>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link> */}
            <Link to="/item/list">
              <ListItem
                button
                className={classes.listItem}
                style={isActive(location, "/dashboard")}
              >
                <ListItemText primary="View Items" />
              </ListItem>
            </Link>
            <Link to="/item/add">
              <ListItem
                button
                className={classes.listItem}
                style={isActive(location, "/item/add")}
              >
                <ListItemText primary="Create New Item" />
              </ListItem>
            </Link>
          </List>
          <Link to="/item/edit">
            <ListItem
              button
              className={classes.listItem}
              style={isActive(location, "/item/edit")}
            >
              <ListItemText primary="Edit Item" />
            </ListItem>
          </Link>
          {/* <Link to="/item/delete">
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Delete Item" />
              </ListItem>
            </Link> */}
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
        <Toolbar />
        <Routes>
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
          <Route exact path="/item/list" element={<ViewItems />} />
          <Route exact path="/item/add" element={<AddItem />} />
          <Route exact path="/item/edit" element={<EditItem />} />
        </Routes>
      </Box>
    </Box>
  );
};
export default MainRouter;
