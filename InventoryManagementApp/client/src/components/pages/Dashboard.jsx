import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '97vh',
    },
    sidebar: {
        width: 300,
        flexShrink: 0,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
    },
    title: {
        color: theme.palette.customColorBlue,
        fontSize: '5rem',
        fontWeight: 'bold',
    },
    description: {
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(2),
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Card className={classes.card}>
                    <Typography variant="h1" className={classes.title}>
                        Dashboard
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                        This page is for testing the component styles and for the dashboard after the user logs in
                    </Typography>
                    <CardContent>
                        <Typography variant="body2" component="p" className={classes.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
