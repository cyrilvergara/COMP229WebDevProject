import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import logo from '../../assets/images/WinterDevLogo_PrimaryLogoLight.svg';

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ bottom: 10, width: '50%', position: 'fixed', left: '25%' }}>
        <div style={{ textAlign: 'center', color: '#616161' }}>
          <Typography variant="body2" component="span">POWERED BY</Typography>
        </div>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <img src={logo} alt="Winter Devs Logo" style={{ verticalAlign: 'middle', width: 300, marginBottom: 10 }} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
