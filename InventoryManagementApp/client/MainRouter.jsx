import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import Profile from "./src/components/Profile/Profile";
import ProfileBody from "./src/components/Profile/ProfileBody";

const useStyles = makeStyles((theme) => ({
  //dito nyo lagay styling :D
}));

const drawerWidth = 240;

const MainRouter = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authHelper.isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  if(!authHelper.isAuthenticated())
  {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </>
    );
  }
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            zIndex: 0,
          },
        }}
      >
        <AppBar position="static" sx={{ width: drawerWidth }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              wdinv
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <List>
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
          <Link to="/item/edit">
            <ListItem button className={classes.listItem}>
              <ListItemText primary="Edit Item" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          marginLeft: drawerWidth, // Adjust margin left to account for Drawer width
          marginTop: 64, // Offset for the AppBar
          zIndex: 1, // Ensure content is above Drawer
          position: "relative", // Ensure proper positioning
        }}
      >
        <AppBar position="fixed" sx={{ zIndex: 1 }}>
          <Toolbar sx={{ ml: drawerWidth }}>
            <Typography variant="h6" noWrap component="div">
              Content HeaderASDFASFSADF
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            {/* Render the Profile component in the AppBar */}
            <Profile />
          </Toolbar>
        </AppBar>
        <Toolbar sx={{ height: 64 }} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item/list" element={<ViewItems />} />
          <Route exact path="/item/add" element={<AddItem />} />
          <Route exact path="/item/edit" element={<EditItem />} />
          <Route exact path="/profilebody" element={<ProfileBody />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default MainRouter;
