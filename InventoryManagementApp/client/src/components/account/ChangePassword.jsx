import React from 'react';
import theme from '../../../theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../sidebar/Sidebar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.black,
        flexGrow: 1,
        overflow: 'hidden',
    },
    grid: {
        justifyContent: 'space-between',
    },
    main: {
        width: `calc(100% - ${drawerWidth}px)`,
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        maxWidth: '700px',
        padding: '64px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    btnPrimary: {
        width: 'min-content',
        padding: '12px 24px',
        borderRadius: '4px',
    },
    card: {
        padding: '24px',
        boxShadow: '0 2px 4px 0 #ABBDC225',
    },
    cardContent: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '24px',
    },
    cardFoot: {
        width: '100%',
        padding: '36px 0 0 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '12px',
    },
    cardAct: {
        display: 'flex',
        flexGrow: 0,
        gap: '12px',
    },
}));


export default function ChangePassword() {
    const classes = useStyles();

    return (

        <ThemeProvider theme={theme}>
            <Container className={classes.root}>
                <Grid container className={classes.grid}>
                    <Grid item>
                        <Sidebar className={classes.sidebar} />
                    </Grid>
                    <Grid item className={classes.main}>
                        <Grid item className={classes.content}>
                            <Typography variant='h5'>Change Password</Typography>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <TextField label="Current Password"></TextField>
                                    <TextField label="New Password"></TextField>
                                    <TextField label="Confirm New Password"></TextField>
                                </CardContent>
                                <Grid className={classes.cardFoot}>
                                    <Grid className={classes.cardAct}>
                                        <Button className={classes.btnPrimary} variant="contained" color="primary" disableElevation> Update </Button>
                                        <Link to='/profile'><Button className={classes.btnPrimary} variant="outlined" color="primary" disableElevation> Cancel </Button></Link>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}