import './Body.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BlogList from '../blogs/BlogList';

const useStyles = makeStyles((theme) => ({
    mainClass: {
        boxShadow: theme.shadows[0],
        backgroundColor:"light grey",
        padding: theme.spacing(3),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
        boxShadow: theme.shadows[6],
    },
}));


function Body() {
    const classes = useStyles();

    const listOfCategories = [
        {
            id: '1',
            categoryName: 'All',
        },
        {
            id: '2',
            categoryName: 'Short Stories',
        },
        {
            id: '3',
            categoryName: 'Puzzles',
        },
        {
            id: '4',
            categoryName: 'Tech Blog',
        },
        {
            id: '5',
            categoryName: 'Random Thoughts',
        },
    ];

    const listOfBlogs = [
        {
            id: '1',
            category: 'Short Stories',
            title: 'Why women can\'t keep secrets',
        },
        {
            id: '2',
            category: 'Short Stories',
            title: 'Mental Health : A Luxury Today?',
        },
        {
            id: '3',
            category: 'Puzzles',
            title: 'Puzzle 1 : Slitherlink',
        },
        {
            id: '4',
            category: 'Short Stories',
            title: 'Missing flight at Mumbai international airport',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: 'My 1st flight journey',
        },
        {
            id: '6',
            category: 'Short Stories',
            title: 'Who am I?',
        },
        {
            id: '7',
            category: 'Short Stories',
            title: '3 mentors of my life',
        },
        {
            id: '8',
            category: 'Short Stories',
            title: 'Let me breathe; please set me free',
        },
        {
            id: '9',
            category: 'Short Stories',
            title: 'Independent India : A crossword puzzle',
        },
        {
            id: '10',
            category: 'Short Stories',
            title: 'Lockdown Thoughts : Privilege of what I want over what I need',
        },
        {
            id: '11',
            category: 'Short Stories',
            title: 'क्या हम वाकई स्वतंत्र हैं',
        },
        {
            id: '12',
            category: 'Short Stories',
            title: 'A Thought',
        },
    ];

    const [currentCategory, setCategory] = useState("All");

    return (
        <div className={classes.mainClass}>

            <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                    {listOfCategories.map((category) => (
                            <Button onClick={() => setCategory(category.categoryName)}>  {category.categoryName} </Button>
                    ))}
            </Grid>

            <BlogList category={currentCategory} listOfBlogs={listOfBlogs} classes={useStyles()}/>

        </div>
    );
}

export default Body;
