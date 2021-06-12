import React from 'react';
import Grid from '@material-ui/core/Grid';

const ShowBlog = (props) => {
     return (
         <div>
             <Grid align="center" style={{backgroundColor:"#eeeeee"}}>
                 <p>{props.blog.date}</p>
                 {props.blog.show}
             </Grid>
         </div>
     );
}

export default ShowBlog;