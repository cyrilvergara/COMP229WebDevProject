import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../sidebar/Sidebar';
import theme from "../../../theme";

const useStyles = makeStyles((theme) => ({

}));


export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar className={classes.sidebar} />
            <main className={classes.content}>
            </main>
        </div>
    );
}