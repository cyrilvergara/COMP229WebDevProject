import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  IconButton,
  TextField,
  Button,
  CardContent,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import authHelper from "../../helper/auth.helper";
import { update } from "../../apis/users.api";
import SnackBar from "../Global/Snackbar";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({}));

export default function ProfileBody() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(authHelper.isAuthenticated().user.name);

  const [openSnackBar, setOpenSnackBar] = React.useState({
    isSuccess: false,
    isOpen: false,
  });

  const [userType, setUserType] = useState(
    authHelper.isAuthenticated().user.role
  );

  const handleSnackBarClose = () => {
    setOpenSnackBar({ isSuccess: false, isOpen: false });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    const updatedAccount = {
      name: name || authHelper.isAuthenticated().user.name,
      email: authHelper.isAuthenticated().user.email,
      role: userType || authHelper.isAuthenticated().user.role,
    };
debugger;
    update(
      authHelper.isAuthenticated().user._id,
      authHelper.isAuthenticated().token,
      updatedAccount
    ).then((data) => {
      if (data && data.error) {
        setOpenSnackBar({ isSuccess: false, isOpen: true });
        return;
      }

      setOpenSnackBar({ isSuccess: true, isOpen: true });
      setUserType(data.role);
      setIsEditing(false);
    });
  };

  return (
    <>
      <Typography variant="h4" noWrap component="div">
        Profile
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent sx={{ position: "relative" }}>
              <IconButton
                aria-label="edit"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  zIndex: 1,
                }}
                onClick={handleEditClick}
              >
                {isEditing ? <CloseIcon /> : <EditIcon />}
              </IconButton>
              <Typography variant="h5" gutterBottom>
                {authHelper.isAuthenticated().user.name}!!
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ID"
                    variant="standard"
                    fullWidth
                    value={authHelper.isAuthenticated().user._id}
                    disabled
                  />
                  <TextField
                    label="Name"
                    variant="standard"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                  />
                  <TextField
                    label="Email"
                    variant="standard"
                    fullWidth
                    value={authHelper.isAuthenticated().user.email}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {!isEditing ? (
                    <TextField
                      label="User Type"
                      variant="standard"
                      fullWidth
                      value={userType}
                      disabled={!isEditing}
                    />
                  ) : (
                    <>
                      <Typography variant="subtitle1">User Type</Typography>
                      <RadioGroup
                        aria-label="user-type"
                        name="user-type"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        disabled={!isEditing}
                      >
                        <FormControlLabel
                          value="user"
                          control={<Radio />}
                          label="User"
                        />
                        <FormControlLabel
                          value="admin"
                          control={<Radio />}
                          label="Admin"
                        />
                      </RadioGroup>
                    </>
                  )}
                </Grid>
              </Grid>
              {isEditing && (
                <Button variant="contained" onClick={handleSaveClick}>
                  Save
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <SnackBar
        open={openSnackBar.isOpen}
        onClose={handleSnackBarClose}
        message={
          openSnackBar.isSuccess
            ? "Profile update successfully"
            : "An error occurred updating your profile"
        }
        severity={openSnackBar.isSuccess ? "success" : "error"}
        position={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
}
