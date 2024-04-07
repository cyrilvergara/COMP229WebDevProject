import React from 'react';
import theme from '../../../theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button';
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
    card: {
        padding: '24px',
        boxShadow: '0 2px 4px 0 #ABBDC225',
        borderRadius: '8px',
    },
    cardHead: {
        width: '100%',
        padding: '0 0 12px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '12px',
    },
    cardAct: {
        display: 'flex',
        flexGrow: 0,
        gap: '8px',
    },
    icon: {
        color: theme.palette.primary.main,
    },
    btnIcon: {
        minWidth: '40px',
        width: '40px',
        height: '40px',
        padding: 0,
        borderRadius: '100%',
    },
    cardContent: {
        padding: '16px 0 0 0',
        display: 'grid',
        gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
        gridAutoFlow: 'column',
        '&:last-child': {
            paddingBottom: '0 !important',
        },
    },
    item: {
        padding: '8px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    label: {
        color: theme.palette.grey[600],
    },
    textLink: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    }
}));


export default function ProfileBody() {
    const classes = useStyles();

    return (

        <ThemeProvider theme={theme}>
            <Container className={classes.root}>
                <Grid container className={classes.grid}>
                    <Grid item>
                    </Grid>
                    <Grid item className={classes.main}>
                        <Grid item className={classes.content}>
                            <Typography variant='h5'>Profile</Typography>
                            <Card className={classes.card}>
                                <Grid className={classes.cardHead}>
                                    <Typography variant='h5'>Name</Typography>
                                    <Grid className={classes.cardAct}>
                                        <Link to="/update">
                                            <Button className={classes.btnIcon}> <EditOutlinedIcon className={classes.icon} /> </Button>
                                        </Link>
                                        <Link to="#">
                                            <Button className={classes.btnIcon}> <DeleteOutlinedIcon className={classes.icon} /> </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                                <CardContent className={classes.cardContent}>
                                    <Container className={classes.item}>
                                        <Typography variant='h6' className={classes.label}>ID</Typography>
                                        <Typography variant='body1' className={classes.Info}>Lorem Ipsum</Typography>
                                    </Container>
                                    <Container className={classes.item}>
                                        <Typography variant='h6' className={classes.label}>Name</Typography>
                                        <Typography variant='body1' className={classes.Info}>Lorem Ipsum</Typography>
                                    </Container>
                                    <Container className={classes.item}>
                                        <Typography variant='h6' className={classes.label}>Email</Typography>
                                        <Typography variant='body1' className={classes.Info}>Lorem Ipsum</Typography>
                                    </Container>
                                    <Container className={classes.item}>
                                        <Typography variant='h6' className={classes.label}>Account Created On</Typography>
                                        <Typography variant='body1' className={classes.Info}>Lorem Ipsum</Typography>
                                    </Container>
                                    <Container className={classes.item}>
                                        <Typography variant='h6' className={classes.label}>Account Last updated on</Typography>
                                        <Typography variant='body1' className={classes.Info}>Lorem Ipsum</Typography>
                                    </Container>
                                    <Container className={classes.item}>
                                        <Typography variant='h6' className={classes.label}>User Type</Typography>
                                        <Typography variant='body1' className={classes.Info}>Lorem Ipsum</Typography>
                                    </Container>
                                    <Container className={classes.item}>
                                        <Typography variant='h6' className={classes.label}>Password</Typography>
                                        <Typography variant='body1' className={classes.Info}>Lorem Ipsum</Typography>
                                        <Link to="/change-password" className={classes.textLink}><Typography variant='h6'>Change Password</Typography></Link>
                                    </Container>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}