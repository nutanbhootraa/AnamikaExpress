import './Body.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ALL from './ALL.png';
import ShortStories from './ShortStories.png';
import Puzzles from './Puzzles.png';
import TechBlog from './TechBlog.png';

const useStyles = makeStyles((theme) => ({
    mainClass: {
        boxShadow: theme.shadows[6],
        backgroundColor:"light yellow",
        padding: theme.spacing(3),

    },
}));

function Body() {
    const classes = useStyles();

    return (
        <div className={classes.mainClass}>

                <Container maxWidth="sm" align="center">
                    <h1>Categories</h1>
                        <Paper elevation={3} variant='outlined' >
                            <Typography><img src={ALL} alt="ALL" width="200px" height="150px" /> <br/></Typography>
                        </Paper>
                    <Paper elevation={3} variant='outlined' >
                            <Typography><img src={ShortStories} alt="ShortStories" width="200px" height="150px" /> <br/></Typography>
                        </Paper>
                    <Paper elevation={3} variant='outlined' >
                            <Typography><img src={Puzzles} alt="Puzzles" width="200px" height="150px" /> <br/></Typography>
                        </Paper>
                    <Paper elevation={3} variant='outlined' >
                            <Typography><img src={TechBlog} alt="TechBlog" width="200px" height="150px" /> <br/></Typography>
                        </Paper>
                </Container>

        </div>
    );
}

export default Body;
