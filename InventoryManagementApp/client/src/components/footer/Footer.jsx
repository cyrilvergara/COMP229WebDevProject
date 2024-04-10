import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/images/WinterDevLogo_PrimaryLogoLight.svg';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: '24px 0',
    textAlign: 'center',
  },
  logoImage: {
    width: 250,
    margin: 'auto',
    // marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <Typography variant="body2" color="textSecondary">
        POWERED BY
      </Typography>
      <div className={classes.logoImage}>
        <img src={logo} alt="Winter Devs Logo" />
      </div>
    </div>
  );
};

export default Footer;
