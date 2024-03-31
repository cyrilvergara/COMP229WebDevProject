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
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Select from '@material-ui/core/Select';

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
    btnDelete: {
        width: 'min-content',
        padding: '12px 24px',
        borderRadius: '4px',
        backgroundColor: theme.palette.error.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
    btnIcon: {
        marginRight: '8px',
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
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gridAutoFlow: 'row',
        gap: '24px',
        '&:last-child': {
            paddingBottom: '0 !important',
        },
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


export default function UpdateAdmin() {
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
                            <Link to="/profile">
                                <Button className={classes.btnPrimary} variant="contained" color="primary" disableElevation> <ArrowBackOutlinedIcon className={classes.btnIcon} /> Back </Button>
                            </Link>
                            <Card className={classes.card}>
                                <Grid className={classes.cardHead}>
                                    <Typography variant='h5'>Name</Typography>
                                </Grid>
                                <CardContent className={classes.cardContent}>
                                    <TextField label="Name"></TextField>
                                    <Select label="User Type">
                                        {/* <MenuItem>Admin User</MenuItem>
                                        <MenuItem>Branch User</MenuItem> */}
                                    </Select>
                                    <TextField label="Email"></TextField>
                                </CardContent>
                                <Grid className={classes.cardFoot}>
                                    <Grid className={classes.cardAct}>
                                        <Button className={classes.btnPrimary} variant="contained" color="primary" disableElevation> Update </Button>
                                        <Button className={classes.btnPrimary} variant="outlined" color="primary" disableElevation> Reset </Button>
                                    </Grid>
                                    <Button className={classes.btnDelete} variant="contained" disableElevation> Delete </Button>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}