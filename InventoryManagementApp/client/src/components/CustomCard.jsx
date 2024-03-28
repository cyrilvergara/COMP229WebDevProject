import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles(theme => ({
    card: {
        margin: 'auto',
        marginTop: theme.spacing(1),
        width: '70%',
    },
    content: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: theme.spacing(4),
    },
    input: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    button: {
        width: '100%',
    },
}));

const CustomCard = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant="h6" className={classes.title}>
                        Welcome!
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            className={classes.input}
                            label="Username"
                            variant="outlined"
                            placeholder="Enter your username"
                        />
                        <TextField
                            className={classes.input}
                            label="Password"
                            type="password"
                            variant="outlined"
                            placeholder="Enter your password"
                        />
                        <div>
                            <a href="#" className={classes.link}>
                                Forgot your password?
                            </a>
                        </div>
                        <Button variant="contained" color="primary" className={classes.button}>
                            LOG IN
                        </Button>
                        <div>
                            <a href="#" className={classes.link}>
                                DON'T HAVE AN ACCOUNT? SIGN UP NOW
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
};

export default CustomCard;
