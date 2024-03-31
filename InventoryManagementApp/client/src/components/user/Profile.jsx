import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../sidebar/Sidebar';
import Container from '@material-ui/core/Container';
import theme from '../../../theme';
import { Grid } from '@material-ui/core';

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
    card: {
        padding: '24px',
    },
}));


export default function Profile() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item>
                    <Sidebar className={classes.sidebar} />
                </Grid>
                <Grid item className={classes.main}>
                    <Grid item className={classes.content}>
                        <Typography variant='h5'>Profile</Typography>
                        <Card className={classes.card}>
                            <Typography variant='h5'>Profile</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}