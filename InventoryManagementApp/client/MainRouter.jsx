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
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Profile from "./src/components/Profile/Profile";
import ProfileBody from "./src/components/Profile/ProfileBody";
import ViewUsers from "./src/components/account/ViewUsers";
import PrivateRoute from "./src/components/Global/PrivateRoute";
import Unauthorized from "./src/components/Global/Unauthorized";
import logo from './assets/images/wdinvLogo_dark.svg';
import logoLight from './assets/images/wdinvLogo_light.svg';
import logoWD from './assets/images/WinterDevLogo_PrimaryLogoDark.svg';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const isActive = (location, path) => {
  return location.pathname === path ? { color: '#0BC4FF' } : { color: '#EFF6F9' };
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.grey[100],
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: `calc(100vw - ${drawerWidth}px)`,
    marginLeft: drawerWidth, // Adjust margin left to account for Drawer width
    zIndex: 1, // Ensure content is above Drawer
    position: 'relative', // Ensure proper positioning
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '100vw',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '24px 0',
    boxShadow: '2px 0 4px 0 rgba(171,189,194,.25)',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
  menuClose: {
    color: theme.palette.common.white,
  },
  menuBurger: {
    color: theme.palette.primary.dark,
    position: 'absolute',
    left: '16px',
    zIndex: '50',
  },
  main: {
    padding: 0,
  },
  header: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: '24px 0 32px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 24px',
    [theme.breakpoints.down('md')]: {
      margin: '16px 0 24px 0',
    },
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
    color: theme.palette.grey[600],
    boxShadow: 'none',
    borderBottom: 'solid 1px #EAF5F9',
    width: `calc(100vw - ${drawerWidth}px)`,
    height: '64px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
  topNavBody: {
    padding: '0 24px 0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      padding: '0 24px',
      justifyContent: 'center',
    },
  },
  notVisOnDesk: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  notVisOnMob: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const drawerWidth = 280;

const MainRouter = () => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = React.useState(matchesMD);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    if (!matchesMD) {
      setOpen(false);
    }
  };

  useEffect(() => {
    setOpen(matchesMD);
  }, [matchesMD]);

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

  const onLogout = () => {
    authHelper.clearJWT();
    navigate("/", { replace: true });
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <CssBaseline />
      {/* Drawer */}
      <Drawer
        variant="persistent"
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
        open={open}
      >
        <Container className={classes.main}>
          <AppBar position="static" sx={{ width: drawerWidth }} className={classes.header}>
            <img src={logo} alt="WDInv Logo" className={classes.logo} />
            <IconButton
              className={`${classes.menuClose} ${classes.notVisOnDesk}`}
              onClick={handleDrawerClose}
            >
              <CloseIcon />
            </IconButton>
          </AppBar>
          <List>
            <Link to="/item/list" className={classes.link} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/list")}>
                <ListItemText primary="View Items" />
              </ListItem>
            </Link>
            <Link to="/item/add" className={classes.link} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/add")}>
                <ListItemText primary="Create New Item" />
              </ListItem>
            </Link>
            <Link to="/item/edit" className={classes.link} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/edit")}>
                <ListItemText primary="Edit Item" />
              </ListItem>
            </Link>
            <Link to="/users" className={classes.link} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/users")}>
                <ListItemText primary="View Users" />
              </ListItem>
            </Link>
            <Link to="/profilebody" className={`${classes.link} ${classes.notVisOnDesk}`} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/profilebody")}>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>
            <ListItem button className={`${classes.listItem} ${classes.notVisOnDesk}`} onClick={onLogout}>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Container>
        <Container className={classes.footer}>
          <Typography variant="h6">Powered by</Typography>
          <img src={logoWD} alt="WDInv Logo" className={classes.logoWD} />
        </Container>
      </Drawer>
      {/* Main content */}
      <Container
        component="main"
        className={classes.main}
      >
        <AppBar position="fixed" sx={{ zIndex: 1 }} className={classes.topNav}>
          <Toolbar sx={{ ml: drawerWidth }} className={classes.topNavBody}>

            <IconButton
              onClick={handleDrawerOpen}
              className={`${classes.menuBurger} ${classes.notVisOnDesk}`}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" className={classes.notVisOnMob}>
              Inventory Management App
            </Typography>
            <Box className={classes.notVisOnMob}>
              {/* Render the Profile component in the AppBar */}
              <Profile />
            </Box>
            <Box className={classes.notVisOnDesk}>
              <img src={logoLight} alt="WDInv Logo" className={classes.logo} />
            </Box>
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
      </Container>
    </Box>
  );
};

export default MainRouter;
