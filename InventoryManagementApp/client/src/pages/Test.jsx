import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    // card: {
    //     maxWidth: 600,
    //     margin: 'auto',
    //     marginTop: theme.spacing(5),
    // },
    // title: {
    //     padding: theme.spacing(3, 2.5, 2),
    //     color: theme.palette.openTitle,
    // },
    // media: {
    //     minHeight: 400,
    // },
}));
export default function Test() {
    const classes = useStyles()
    return (
        <Card className={classes.card}>

            <Typography variant="h6" className={classes.title}>Test Page</Typography>
            <Typography variant="body1" className={classes.title}>This page is for testing the component styles</Typography>
            <CardContent>
                <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </CardContent>
        </Card>
    )
}

