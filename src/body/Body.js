import './Body.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import BlogList from '../blogs/BlogList';
import categories from '../categories/Categories';
import blogs from '../blogs/BlogMetaData';
import Latest from './Latest';

const useStyles = makeStyles((theme) => ({
    mainClass: {
        boxShadow: theme.shadows[0],
        backgroundColor:"light grey",
        minHeight:'200px'

    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
        boxShadow: theme.shadows[6],
    },
}));


function Body() {
    const classes = useStyles();

    const [currentCategory, setCategory] = useState("Short Stories");

    return (
        <div className={classes.mainClass}>

            <Latest  category={currentCategory} listOfBlogs={blogs} classes={useStyles()}/>

            <Grid container spacing={1} justify="center" alignItems="center" style={{minHeight:"50px"}}>
                    {categories.map((category) => (
                            <Button onClick={() => setCategory(category.categoryName)} color="secondary" >  {category.categoryName} </Button>
                    ))}
            </Grid>

            <BlogList category={currentCategory} listOfBlogs={blogs} classes={useStyles()}/>

        </div>
    );
}

export default Body;
