import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./src/components/pages/Home";
import ViewItems from "./src/components/inventory/ViewItems";
import AddItem from "./src/components/inventory/AddItem";
import EditItem from "./src/components/inventory/EditItem";
import DeleteItem from "./src/components/inventory/DeleteItem";
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
  ListItemIcon,
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
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const isActive = (location, path) => {
  return location.pathname === path ? { color: '#0BC4FF' } : { color: '#EFF6F9' };
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.grey[100],
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'relative',
    '@media (max-width:960px)': {
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
    '@media (max-width:960px)': {
      width: '100vw',
    },
  },
  menuClose: {
    color: theme.palette.common.white,
  },
  menuBurger: {
    color: theme.palette.primary.dark,
    position: 'absolute',
    left: '24px',
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
    '@media (max-width:960px)': {
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
  listIcon: {
    color: theme.palette.primary.light,
    minWidth: '40px',
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
    '@media (max-width:960px)': {
      width: '100vw',
    },
  },
  topNavBody: {
    padding: '0 24px 0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width:960px)': {
      padding: '0 24px',
      justifyContent: 'center',
    },
  },
  notVisOnDesk: {
    '@media (min-width:960px)': {
      display: 'none',
    },
  },
  notVisOnMob: {
    '@media (max-width:960px)': {
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
  const [currentRoute, setCurrentRoute] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = (event) => {
    setCurrentRoute(event.target.innerText);
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
                <ListItemIcon className={classes.listIcon}>
                  <ListAltOutlinedIcon style={isActive(location, "/item/list")} />
                </ListItemIcon>
                <ListItemText primary="View Items" />
              </ListItem>
            </Link>
            <Link to="/item/add" className={classes.link} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/add")}>
                <ListItemIcon className={classes.listIcon}>
                  <PublishOutlinedIcon style={isActive(location, "/item/add")} />
                </ListItemIcon>
                <ListItemText primary="Create New Item" />
              </ListItem>
            </Link>
            <Link to="/item/edit" className={classes.link} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/edit")}>
                <ListItemIcon className={classes.listIcon}>
                  <EditOutlinedIcon style={isActive(location, "/item/edit")} />
                </ListItemIcon>
                <ListItemText primary="Edit Item" />
              </ListItem>
            </Link>
            <Link to="/item/delete" className={classes.link} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/item/delete")}>
                <ListItemIcon className={classes.listIcon}>
                  <DeleteOutlinedIcon style={isActive(location, "/item/delete")} />
                </ListItemIcon>
                <ListItemText primary="Delete Item" />
              </ListItem>
            </Link>
            <Link to="/users" className={classes.link} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/users")}>
                <ListItemIcon className={classes.listIcon}>
                  <PeopleOutlinedIcon style={isActive(location, "/users")} />
                </ListItemIcon>
                <ListItemText primary="View Users" />
              </ListItem>
            </Link>
            <Link to="/profilebody" className={`${classes.link} ${classes.notVisOnDesk}`} onClick={handleDrawerClose}>
              <ListItem button className={classes.listItem} style={isActive(location, "/profilebody")}>
                <ListItemIcon className={classes.listIcon}>
                  <PersonOutlineOutlinedIcon style={isActive(location, "/profilebody")} />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>
            <ListItem button className={`${classes.listItem} ${classes.notVisOnDesk}`} onClick={onLogout}>
                <ListItemIcon className={classes.listIcon}>
                  <ExitToAppOutlinedIcon />
                </ListItemIcon>
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
              WD Inventory Management App / {currentRoute}
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
          <Route exact path="/item/delete" element={<DeleteItem />} />
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
