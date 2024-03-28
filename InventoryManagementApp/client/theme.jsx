import { createTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'
const theme = createTheme({
    typography: {
        useNextVariants: true,
        fontFamily: [
            'proxima-nova',
            'futura-pt',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    palette: {
        primary: {
            light: '#5c67a3',
            main: '#3f4771',
            dark: '#2e355b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff79b0',
            main: '#ff4081',
            dark: '#c60055',
            contrastText: '#000',
        },
        openTitle: '#3f4771',
        protectedTitle: pink['400'],
        customColorBlue: '#0bc4ff',
        type: 'light'
    }
})
export default theme
