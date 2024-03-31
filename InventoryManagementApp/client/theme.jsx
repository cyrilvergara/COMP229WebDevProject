import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'proxima-nova',
      'futura-pt',
      '-apple-system',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    common: {
      black: '#02222D',
      white: '#FDFFFF',
    },
    primary: {
      light: '#EFF6F9',
      main: '#0BC4FF',
      dark: '#033140',
      contrastText: '#EFF6F9',
    },
    secondary: {
      light: '#C7F6F3',
      main: '#0B7BFF',
      dark: '#0B7BFF',
      contrastText: '#000',
    },
    openTitle: '#02222D',
    customColorBlue: '#0bc4ff',
    customColorDarkBlue: '#022537',
    background: {
      default: '#FCFEFF',
    },
    error: {
      light: '#F05816',
      main: '#F05816',
      dark: '#F05816',
      contrastText: '#FDFFFF',
    },
    warning: {
      light: '#F0DA16',
      main: '#F0DA16',
      dark: '#F0DA16',
      contrastText: '#FDFFFF',
    },
    sucess: {
      light: '#16F0AE',
      main: '#16F0AE',
      dark: '#16F0AE',
      contrastText: '#FDFFFF',
    },
    info: {
      light: '#0B7BFF',
      main: '#0B7BFF',
      dark: '#0B7BFF',
      contrastText: '#FDFFFF',
    },
    grey: {
      50: '#FCFEFF',
      100: '#F7FDFF',
      200: '#EAF5F9',
      300: '#CADADE',
      400: '#ABBDC2',
      500: '#8DA1A6',
      600: '#71848A',
      700: '#57696E',
      800: '#3E4D52',
      900: '#273235',
    },
  },
});

export default theme;
