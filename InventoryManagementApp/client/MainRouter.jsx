import React from "react";
import { Route, Routes } from "react-router-dom";
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
  },
  title: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  listItem: {
    color: theme.palette.primary.contrastText,
  },
  footer: {
    justifyContent: "center",
  },
}));

const drawerWidth = 300;

const MainRouter = () => {
  const classes = useStyles();
  
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
          <Typography variant="h5" className={classes.title}>
            wdinv
          </Typography>
          <List>
            {/* <Link to="/dashboard">
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link> */}
            <Link to="/item/list">
              <ListItem button className={classes.listItem}>
                <ListItemText primary="View Items" />
              </ListItem>
            </Link>
            <Link to="/item/add">
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Create New Item" />
              </ListItem>
            </Link>
          </List>
          <Link to="/item/edit">
            <ListItem button className={classes.listItem}>
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
          <Footer />
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
