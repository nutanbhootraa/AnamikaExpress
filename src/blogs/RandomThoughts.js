import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import listOfThoughts from './RandomThoughtsMetaData';

const RandomThoughts = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div>
            <Pagination count={10} page={page} onChange={handleChange}/>

            {listOfThoughts.filter(thought => (thought.id >= (page-1)*5 & thought.id < (page)*5 )).map((thought) => (
                <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                    {thought.show}
                </Grid>
            ))}

        </div>
    );
}

export default RandomThoughts;