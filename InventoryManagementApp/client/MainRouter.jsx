import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Profile from "./src/components/Profile/Profile";
import ProfileBody from "./src/components/Profile/ProfileBody";
import ViewUsers from "./src/components/account/ViewUsers";
import PrivateRoute from "./src/components/Global/PrivateRoute";
import Unauthorized from "./src/components/Global/Unauthorized";
import logo from './assets/images/wdinvLogo_dark.svg';
import logoWD from './assets/images/WinterDevLogo_PrimaryLogoDark.svg';

const isActive = (location, path) => {
  return location.pathname === path ? { color: '#0BC4FF' } : { color: '#EFF6F9' };
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '24px 0',
  },
  main: {
    padding: 0,
  },
  header: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: '0 0 32px 0',
  },
  logo: {
    height: '24px',
  },
  link: {
    textDecoration: 'none',
  },
  listItem: {
    color: theme.palette.primary.light,
    padding: '12px 24px',
    borderBottom: '1px solid rgba(234,245,249,.05)',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.common.white,
    gap: '8px',
  },
  logoWD: {
    height: '48px',
  },
  topNav: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[300],
    boxShadow: 'none',
    borderBottom: 'solid 1px #EAF5F9',
    width: `calc(100vw - ${drawerWidth}px)`,
  },
}));

const drawerWidth = 280;

const MainRouter = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!authHelper.isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  if (!authHelper.isAuthenticated()) {
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
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Container className={classes.main}>
          <AppBar position="static" sx={{ width: drawerWidth }} className={classes.header}>
            <Toolbar>
              <img src={logo} alt="WDInv Logo" className={classes.logo} />
            </Toolbar>
          </AppBar>
          <List>
            <Link to="/item/list" className={classes.link}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/list")}>
                <ListItemText primary="View Items" />
              </ListItem>
            </Link>
            <Link to="/item/add" className={classes.link}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/add")}>
                <ListItemText primary="Create New Item" />
              </ListItem>
            </Link>
            <Link to="/item/edit" className={classes.link}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/edit")}>
                <ListItemText primary="Edit Item" />
              </ListItem>
            </Link>
            <Link to="/users" className={classes.link}>
              <ListItem button className={classes.listItem} style={isActive(location, "/users")}>
                <ListItemText primary="View Users" />
              </ListItem>
            </Link>
          </List>
        </Container>
        <Container className={classes.footer}>
          <Typography variant="h6">Powered by</Typography>
          <img src={logoWD} alt="WDInv Logo" className={classes.logoWD} />
        </Container>
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
        <AppBar position="fixed" sx={{ zIndex: 1 }} className={classes.topNav}>
          <Toolbar sx={{ ml: drawerWidth }} className={classes.topNavBody}>
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
          <Route
            exact
            path="/users"
            element={
              <PrivateRoute>
                <ViewUsers />
              </PrivateRoute>
            }
          />
          <Route exact path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default MainRouter;
