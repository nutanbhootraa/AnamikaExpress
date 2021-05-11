import './Footer.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://anamikaexpress.com/">
                Anamika Express
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
        boxShadow: theme.shadows[1],
    }
}));



function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container maxWidth="sm" align="center">
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} className={classes.sidebarAboutBox}>
                            <Typography variant="h6" gutterBottom>
                                Author :
                            </Typography>
                            <Typography>An Avid Reader <br/> A Proud Memer<br/> A Passionate Coder</Typography>
                        </Paper>
                    </Grid>
                </Container>
                <Container maxWidth="sm">
                    <Typography variant="body1"><b>THIS BLOG IS COLLECTION OF AUTHOR'S THOUGHTS.</b></Typography>
                    <Typography variant="body1"><b>IT IS NOT INTENDED TO HURT ANYONE’S FEELINGS.</b></Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}

export default Footer;
