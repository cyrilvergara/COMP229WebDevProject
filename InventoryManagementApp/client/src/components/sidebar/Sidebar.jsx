import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Footer from '../footer/Footer';
import theme from '../../../theme';

const drawerWidth = 300;

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
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  listItem: {
    color: theme.palette.primary.contrastText,
  },
  footer: {
    justifyContent: 'center',
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
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
          {['View Records', 'Create New Record', 'Update Records', 'Delete Records', 'View Users', 'Account', 'Log Out'].map((text, index) => (
            <ListItem button key={index} className={classes.listItem}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </Drawer>
  );
};

export default Sidebar;
