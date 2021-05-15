import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import listOfThoughts from './RandomThoughtsMetaData';

const RandomThoughts = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const noOfThoughtsPerPage = 5;
    const noOfPages= Math.floor(listOfThoughts.length/noOfThoughtsPerPage) + 1;
    return (
        <div>
            <Pagination count={noOfPages} page={page} onChange={handleChange}/>

            {listOfThoughts.filter(thought => (thought.id >= (page-1)* noOfThoughtsPerPage & thought.id < (page)* noOfThoughtsPerPage )).map((thought) => (
                <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                    {thought.show}
                </Grid>
            ))}
            <Pagination count={noOfPages} page={page} onChange={handleChange}/>
        </div>
    );
}

export default RandomThoughts;