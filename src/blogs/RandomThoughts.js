import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import listOfThoughts from './RandomThoughtsMetaData';

const RandomThoughts = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const noOfThoughtsPerPage = 5;
    const noOfPages= Math.ceil(listOfThoughts.length/noOfThoughtsPerPage);
    const lengthOfThoughts = listOfThoughts.length;

    return (
        <div className="randomThoughts">
            <Pagination count={noOfPages} page={page} onChange={handleChange}/>

            {
                listOfThoughts
                    .filter(thought => ((lengthOfThoughts-thought.id) > (page-1)* noOfThoughtsPerPage & (lengthOfThoughts-thought.id) <= (page)* noOfThoughtsPerPage ))
                    .map((thought) => (
                        <div key={thought.id} align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                            <u>{thought.id}</u>
                            {thought.show}
                        </div>
                    ))}
            <Pagination count={noOfPages} page={page} onChange={handleChange}/>
        </div>
    );
}

export default RandomThoughts;