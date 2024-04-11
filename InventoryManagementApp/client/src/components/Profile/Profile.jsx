import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Avatar, Menu, MenuItem, IconButton } from "@material-ui/core";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import authHelper from "../../helper/auth.helper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    '& .MuiAvatar-colorDefault': {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.common.white,
    },
    '&:hover': {
      backgroundColor: 'rgba(11,196,255,.1)',
    },
    padding: '8px',
  },
  avatarIcon: {
    width: '32px',
    height: '32px',
  },
  menuPaper: {
    top: '56px !important',
    left: 'auto !important',
    right: '40px',
    boxShadow: '0 2px 4px 0 rgba(171,189,194,.25)',
  },
}))

const Profile = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onProfileClick = () => {
    setAnchorEl(null);
    navigate("/profilebody");
  };

  const onLogout = () => {
    authHelper.clearJWT();
    navigate("/", { replace: true });
  };

  return (
    <>
      <IconButton
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
        className={classes.avatar}
      >
        <Avatar className={classes.avatarIcon}>
          <AccountCircleOutlinedIcon />
        </Avatar>
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        classes={{
          paper: classes.menuPaper,
        }}
      >
        <MenuItem onClick={onProfileClick}>Profile</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
