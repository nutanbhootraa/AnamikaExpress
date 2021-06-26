import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { HashLink as Link} from 'react-router-hash-link';

function Body(props) {
    return (
            <Grid container spacing={1} justify="center" alignItems="center" style={{minHeight:"50px"}} id="top">
                {props.CategoriesMetaData.map((category) => (
                    <Link to={'/'+category.link} replace style={{textDecoration:'none'}}>
                        <Button onClick={() => props.setCategory(category)} color="secondary" >  {category.categoryName} </Button>
                    </Link>
                ))}
            </Grid>
    );
}

export default Body;
