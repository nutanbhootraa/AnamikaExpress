import './Body.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShowBlogList from '../blogs/ShowBlogList';
import ShowCategoriesList from '../categories/ShowCategoriesList';
import CategoriesMetaData from '../categories/CategoriesMetaData';
import blogs from '../blogs/BlogMetaData';
import Counter from '../Counter';
import BackToTop from './BackToTop'

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
    const category = CategoriesMetaData.filter(category => url.includes(category.link))[0];
    return category!= null ? category : CategoriesMetaData[0];
};

function Body() {
    const classes = useStyles();

    const [currentCategory, setCategory] = useState(getCategory());

    return (
        <div className={classes.mainClass}>

            <ShowCategoriesList CategoriesMetaData={CategoriesMetaData} setCategory={setCategory} />

            <ShowBlogList category={currentCategory} listOfBlogs={blogs} classes={useStyles()}/>

            <BackToTop/>

            <Counter/>

        </div>
    );
}

export default Body;
