import './Body.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import BlogList from '../blogs/BlogList';
import categories from '../categories/Categories';
import blogs from '../blogs/BlogMetaData';
import { HashLink as Link} from 'react-router-hash-link';

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

const getCategory = () => {
    const url = window.location.href;
    const category = categories.filter(category => url.includes(category.link))[0];
    return category!= null ? category : categories[1];
}

function Body() {
    const classes = useStyles();

    const [currentCategory, setCategory] = useState(getCategory());

    return (
        <div className={classes.mainClass}>

            <Grid container spacing={1} justify="center" alignItems="center" style={{minHeight:"50px"}} id="top">
                    {categories.map((category) => (
                        <Link to={'/'+category.link} replace style={{textDecoration:'none'}}>
                            <Button onClick={() => setCategory(category)} color="secondary" >  {category.categoryName} </Button>
                        </Link>
                    ))}
            </Grid>

            <BlogList category={currentCategory} listOfBlogs={blogs} classes={useStyles()}/>

            <a href={'/#top'} style={{textDecoration:'none'}}>
                <Button color="primary" variant="contained"> Back to Top</Button>
            </a>
        </div>
    );
}

export default Body;
