import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";
import authHelper from "../../helper/auth.helper";
import { update } from "../../apis/users.api";
import SnackBar from "../Global/Snackbar";
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
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '700px',
    minHeight: 'calc(100vh - 64px)',
    padding: '64px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '24px',
    '@media (max-width:960px)': {
      padding: '48px 24px 64px 24px',
    },
    '@media (min-width:960px) and (max-width:1280px)': {
      padding: '64px 24px',
    },
  },
  card: {
    width: '100%',
    boxShadow: '0 2px 4px 0 rgba(171,189,194,.25)',
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px',
    padding: '24px',
  },
  cardHead: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '36px',
  },
  icon: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(11,196,255,.1)',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gridAutoFlow: 'row',
    gap: '24px',
    marginBottom: '36px',
    '@media (max-width:960px)': {
      gridTemplateColumns: '1fr',
    },
  },
  btnPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '12px 24px',
  },
  gridUser: {
    position: 'relative',
    '@media (max-width:960px)': {
      order: 4,
    },
  },
  radioGrp: {
    position: 'absolute',
    '@media (max-width:960px)': {
      position: 'relative',
    },
  },
  notVisOnMob: {
    '@media (max-width:960px)': {
      display: 'none',
    },
  },
}));

export default function ProfileBody() {
  const classes = useStyles();
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
      authHelper.updateUser(data);
    });
  };

  return (
    <>

      <Container className={classes.main}>
        <Typography variant="h5" noWrap component="div">
          Profile
        </Typography>
        <Card className={classes.card}>
          <Container className={classes.cardHead}>
            <Typography variant="h5">
              {authHelper.isAuthenticated().user.name}
            </Typography>
            <IconButton
              aria-label="edit"
              onClick={handleEditClick}
              className={classes.icon}
            >
              {isEditing ? <CloseIcon /> : <EditOutlinedIcon />}
            </IconButton>
          </Container>
          <Grid container className={classes.grid}>
            <Grid item xs={12}>
              <TextField
                label="ID"
                variant="standard"
                fullWidth
                value={authHelper.isAuthenticated().user._id}
                disabled
              />
            </Grid>
            <Grid item xs={12} className={classes.gridUser}>
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
                  <Typography variant="body2">User Type</Typography>
                  <RadioGroup
                    aria-label="user-type"
                    name="user-type"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    disabled={!isEditing}
                    className={classes.radioGrp}
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
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="standard"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} className={classes.notVisOnMob} />
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                value={authHelper.isAuthenticated().user.email}
                disabled
              />
            </Grid>
            
          </Grid>
          {isEditing && (
            <Button
            variant="contained"
            onClick={handleSaveClick}
            disableElevation
            className={classes.btnPrimary}
            >
              Save
            </Button>
          )}
        </Card>

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
      </Container>
    </>
  );
}
