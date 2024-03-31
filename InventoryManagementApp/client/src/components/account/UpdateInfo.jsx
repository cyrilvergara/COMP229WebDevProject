import React from 'react';
import theme from '../../../theme';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../sidebar/Sidebar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
        boxShadow: '0 2px 4px 0 #ABBDC225',
    },
    cardHead: {
        width: '100%',
        padding: '0 0 12px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '12px',
    },
    cardContent: {
        padding: '16px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '48px',
    },
}));


export default function UpdateInfo() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item>
                    <Sidebar className={classes.sidebar} />
                </Grid>
                <Grid item className={classes.main}>
                    <Grid item className={classes.content}>
                        <Card className={classes.card}>
                            <Grid className={classes.cardHead}>
                                <Typography variant='h5'>Name</Typography>
                            </Grid>
                            <CardContent className={classes.cardContent}>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}