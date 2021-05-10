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
import LateNightRandomThoughts from './LateNightRandomThoughts.png';

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

                <Container maxWidth="xs" align="center" display="inline">
                    <h1>Categories</h1>
                        <Paper elevation={3} variant='outlined' >
                            <img src={ALL} alt="ALL" width="150px" height="150px" />
                        </Paper>
                    <Paper elevation={3} variant='outlined' >
                            <img src={ShortStories} alt="ShortStories" width="150px" height="150px" />
                        <Typography variant="subtitle1" gutterBottom>
                            Will be released every Friday and Saturday
                        </Typography>

                        </Paper>
                    <Paper elevation={3} variant='outlined' >
                            <img src={Puzzles} alt="Puzzles" width="150px" height="150px" />
                        <Typography variant="subtitle1" gutterBottom>
                            Will be released every Wednesday
                        </Typography>

                    </Paper>
                    <Paper elevation={3} variant='outlined' >
                            <img src={TechBlog} alt="TechBlog" width="150px" height="150px" />
                        <Typography variant="subtitle1" gutterBottom>
                            Will be released every Sunday
                        </Typography>
                    </Paper>
                    <Paper elevation={3} variant='outlined' >
                            <img src={LateNightRandomThoughts} alt="LateNightRandomThoughts" width="150px" height="150px" />
                        <Typography variant="subtitle1" gutterBottom>
                            Will be released every day
                        </Typography>
                    </Paper>
                </Container>

        </div>
    );
}

export default Body;
