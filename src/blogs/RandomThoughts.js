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
    const lengthOfThoughts = listOfThoughts.length;

    return (
        <div>
            <Pagination count={noOfPages} page={page} onChange={handleChange}/>

            {
                listOfThoughts
                    .filter(thought => ((lengthOfThoughts-thought.id) > (page-1)* noOfThoughtsPerPage & (lengthOfThoughts-thought.id) <= (page)* noOfThoughtsPerPage ))
                    .map((thought) => (
                        <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                            {thought.show}
                        </Grid>
                    ))}
            <Pagination count={noOfPages} page={page} onChange={handleChange}/>
        </div>
    );
}

export default RandomThoughts;