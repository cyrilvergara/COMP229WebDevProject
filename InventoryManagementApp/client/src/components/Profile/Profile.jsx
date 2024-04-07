import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Avatar, Menu, MenuItem, IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import authHelper from "../../helper/auth.helper";

const Profile = () => {
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
      >
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={onProfileClick}>Profile</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
